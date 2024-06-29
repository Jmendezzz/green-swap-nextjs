import { Pagination } from "@/domain/common/Pagination";
import { ListProductOutDTO } from "@/domain/products/ListProductOutDTO";

const REQUEST_MAPPING = 'products';

export async function getProducts(): Promise<Pagination<ListProductOutDTO>> {
  const response = await fetch(`${process.env.BACKEND_URL}/${REQUEST_MAPPING}/search`, {
    method: 'POST',
    body: JSON.stringify({}),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  return response.json();
}
