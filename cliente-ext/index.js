import got from "got";

const url = "https://jsonplaceholder.typicode.com/todos/2";

const getData = async () => {
  try {
    const response = await got.get(url);
    console.log(JSON.parse(response.body));
  } catch (error) {
    console.log(error);
  }
};

getData();
