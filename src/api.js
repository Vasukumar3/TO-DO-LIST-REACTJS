// api.js
const API_ENDPOINT = "https://jsonplaceholder.typicode.com/users/1/todos";

export const fetchTodos = async () => {
  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};
