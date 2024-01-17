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
