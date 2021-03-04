export const telephoneUSAFormater = (telephone: string): string =>
  telephone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

const format = { telephoneUSAFormater };

export { format };
