import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x0324933DFDF8E73aDA930f6F236E24B0847B1A13");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Bonde do Café",
        description: "NFT pass para a RoastDAO!",
        image: readFileSync("scripts/assets/TGRgif.webp"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no drop!");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()