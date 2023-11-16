export async function fetchProducts(userInput) {
  console.log(userInput);
  try {
    const response = await fetch(`http://localhost:8000/product/${userInput}`);
    const responseBody = await response.text();
    console.log(response)
    console.log(responseBody)
    if (responseBody.trim() !== "") {
      const data = JSON.parse(responseBody);
      console.log(data)
      return data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
