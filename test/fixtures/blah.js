
async function fn() {
  await Promise.resolve();
  return true;
}

export default async function () {
  await Promise.resolve();
  return true;
}
