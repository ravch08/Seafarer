export async function getCrew() {
  const response = await fetch(`http://localhost:3000/teams`);
  const data = response.json();
  return data;
}

export async function getPricing() {
  const response = await fetch(`http://localhost:3000/pricing`);
  const data = await response.json();
  return data;
}

export async function getTestimonials() {
  const response = await fetch(`http://localhost:3000/testimonials`);
  const data = await response.json();
  return data;
}

export async function getTours() {
  const response = await fetch(`http://localhost:3000/tours`);
  const data = await response.json();
  return data;
}

export async function getTourDetail(id: number) {
  const response = await fetch(`http://localhost:3000/tours/${id}`);
  const data = await response.json();
  return data;
}
