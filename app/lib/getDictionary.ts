import fs from 'fs';
import path from 'path';

export const getDictionary = async (locale: string) => {
  const filePath = path.join(process.cwd(), 'locales', locale, 'common.json');
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
};
