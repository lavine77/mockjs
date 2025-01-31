import use from './custom/use';
import random from './random';

/**
 * 解析 value
 * @param value 例如：int(1,10)
 * @returns 解析后的值
 */
export default function parser(value: string) {
  const regex = /@(\w+)\((.*)\)/;
  const match = value.match(regex);
  if (!match) {
    return value;
  }
  const opt = match[1];
  const args = match[2]
    .split(',')
    .filter(Boolean)
    .map(arg => (arg.match(/^\d+$/) ? Number(arg) : arg));
  // @ts-ignore
  const func = random[opt] || use(opt);

  return func?.(...args);
}
