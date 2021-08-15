interface Data {
  name: string;
}

const data = {
  name: "qvil",
};

export const getData =
  (delay: number = 1000) =>
  (): Promise<Data> =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(data);
      }, delay)
    );

export const getError = (): Promise<Error> =>
  new Promise((_, reject) =>
    setTimeout(() => {
      reject(new Error("My Error"));
    }, 3000)
  );
