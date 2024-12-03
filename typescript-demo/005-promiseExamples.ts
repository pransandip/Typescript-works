/** Promise */
async function verifyToken(token: string) {
  return new Promise((resolve, reject) => {
    if (token !== 'sfysxcxsfxtfxf') {
      return reject(0);
    }
    resolve(1);
  });
}

/** Top-level 'await' expressions are only allowed when
 * the 'module' option is set to 'es2022', 'esnext',
 * 'system', 'node16', 'nodenext', or 'preserve',
 * and the 'target' option is set to 'es2017' or higher */

async function register() {
  try {
    const payload = await verifyToken('sfysxcxsfxtfxf');
    console.log(payload);
  } catch (err) {
    console.log(err);
  }
}
register();
