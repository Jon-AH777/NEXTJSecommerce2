import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    res.status(200).json(products);
    console.log(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};