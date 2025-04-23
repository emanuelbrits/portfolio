import 'server-only';
import path from 'path';
import fs from 'fs/promises';

export const getDictionary = async (locale: string) => {
    const filePath = path.join(process.cwd(), 'src', 'app', 'public', 'locales', locale, 'common.json');
    const file = await fs.readFile(filePath, 'utf8');
    return JSON.parse(file);
};