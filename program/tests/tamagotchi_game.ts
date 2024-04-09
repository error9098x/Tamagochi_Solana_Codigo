
import { AnchorProvider, BN, setProvider, web3 } from "@coral-xyz/anchor";
import * as tamagotchiGameClient from "../app/program_client";
import chai from "chai";
import { assert, expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
chai.use(chaiAsPromised);

const programId = new web3.PublicKey("8eY25XgQKkEXwSrcm7u19VW1L1c27SRCKpm2r3UjRBZk");

describe("tamagotchi_game tests", () => {
  // Configure the client to use the local cluster
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const systemWallet = (provider.wallet as NodeWallet).payer;

  it("First test", async () => {
    // Add your test here
  });
});
