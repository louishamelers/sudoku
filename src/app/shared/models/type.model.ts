export const typeGenerated = 'generated';
export const typeDaily = 'daily';

export const types = [typeGenerated, typeDaily] as const;
export type Type = typeof types[number];
