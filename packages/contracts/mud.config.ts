import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    Counter: {
      keySchema: {},
      schema: "uint32",
    },
    Avatar: {
      keySchema: {
        owner:"address"
      },
      schema: "string",
    },
  },
});
