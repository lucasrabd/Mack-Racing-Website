/* ============================================================
   Gerador de ZIP sem dependências.

   Usa o método "stored" (sem compressão) — PNG já é comprimido,
   então não perdemos quase nada e evitamos puxar uma lib nova
   pro projeto só pra isso.

   Formato: ZIP clássico (local header + central directory + EOCD).
   ============================================================ */

/* --- CRC32 (obrigatório no formato ZIP) --- */
const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i += 1) {
    let c = i;
    for (let k = 0; k < 8; k += 1) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c >>> 0;
  }
  return table;
})();

function crc32(bytes) {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i += 1) {
    c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

const enc = new TextEncoder();

function strBytes(s) {
  return enc.encode(s);
}

function base64Bytes(b64) {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i += 1) out[i] = bin.charCodeAt(i);
  return out;
}

/* Escritor de bytes little-endian */
function makeWriter() {
  let chunks = [];
  let length = 0;
  return {
    push(bytes) {
      chunks.push(bytes);
      length += bytes.length;
    },
    u16(v) {
      const b = new Uint8Array(2);
      new DataView(b.buffer).setUint16(0, v, true);
      this.push(b);
    },
    u32(v) {
      const b = new Uint8Array(4);
      new DataView(b.buffer).setUint32(0, v >>> 0, true);
      this.push(b);
    },
    get length() {
      return length;
    },
    build() {
      const out = new Uint8Array(length);
      let off = 0;
      chunks.forEach((c) => {
        out.set(c, off);
        off += c.length;
      });
      return out;
    },
  };
}

/* Data/hora no formato MS-DOS usado pelo ZIP */
function dosDateTime(d = new Date()) {
  const time =
    (d.getHours() << 11) | (d.getMinutes() << 5) | (Math.floor(d.getSeconds() / 2));
  const date =
    ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
  return { time, date };
}

/* files: [{ name: 'caminho/no/zip.png', bytes: Uint8Array }] */
export function createZip(files) {
  const w = makeWriter();
  const central = [];
  const { time, date } = dosDateTime();

  files.forEach((f) => {
    const nameBytes = strBytes(f.name);
    const crc = crc32(f.bytes);
    const offset = w.length;

    // ---- Local file header ----
    w.u32(0x04034b50);
    w.u16(20); // versão mínima
    w.u16(0x0800); // flag: nome em UTF-8
    w.u16(0); // método: stored
    w.u16(time);
    w.u16(date);
    w.u32(crc);
    w.u32(f.bytes.length); // compressed
    w.u32(f.bytes.length); // uncompressed
    w.u16(nameBytes.length);
    w.u16(0); // extra
    w.push(nameBytes);
    w.push(f.bytes);

    central.push({ nameBytes, crc, size: f.bytes.length, offset });
  });

  // ---- Central directory ----
  const cdStart = w.length;
  central.forEach((c) => {
    w.u32(0x02014b50);
    w.u16(20); // versão que criou
    w.u16(20); // versão mínima
    w.u16(0x0800);
    w.u16(0);
    w.u16(time);
    w.u16(date);
    w.u32(c.crc);
    w.u32(c.size);
    w.u32(c.size);
    w.u16(c.nameBytes.length);
    w.u16(0); // extra
    w.u16(0); // comentário
    w.u16(0); // disco
    w.u16(0); // atributos internos
    w.u32(0); // atributos externos
    w.u32(c.offset);
    w.push(c.nameBytes);
  });
  const cdSize = w.length - cdStart;

  // ---- End of central directory ----
  w.u32(0x06054b50);
  w.u16(0);
  w.u16(0);
  w.u16(central.length);
  w.u16(central.length);
  w.u32(cdSize);
  w.u32(cdStart);
  w.u16(0);

  return new Blob([w.build()], { type: 'application/zip' });
}

export { strBytes, base64Bytes, crc32 };
