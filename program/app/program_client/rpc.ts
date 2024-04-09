// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import {
  AnchorProvider,
  BN,
  IdlAccounts,
  Program,
  web3,
} from "@coral-xyz/anchor";
import { MethodsBuilder } from "@coral-xyz/anchor/dist/cjs/program/namespace/methods";
import { TamagotchiGame } from "../../target/types/tamagotchi_game";
import idl from "../../target/idl/tamagotchi_game.json";
import * as pda from "./pda";



let _program: Program<TamagotchiGame>;


export const initializeClient = (
    programId: web3.PublicKey,
    anchorProvider = AnchorProvider.env(),
) => {
    _program = new Program<TamagotchiGame>(
        idl as never,
        programId,
        anchorProvider,
    );


};

export type CreateTamagotchiArgs = {
  feePayer: web3.PublicKey;
  tamagotchiState: web3.PublicKey;
  owner: web3.PublicKey;
  name: string;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Initializes a new TamagotchiState PDA for the virtual pet.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` tamagotchi_state: {@link TamagotchiState} TamagotchiState PDA to be initialized.
 *
 * Data:
 * - owner: {@link PublicKey} PublicKey of the account that owns the TamagotchiState.
 * - name: {@link string} The name to be given to the TamagotchiState.
 */
export const createTamagotchiBuilder = (
	args: CreateTamagotchiArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<TamagotchiGame, never> => {


  return _program
    .methods
    .createTamagotchi(
      args.owner,
      args.name,
    )
    .accounts({
      feePayer: args.feePayer,
      tamagotchiState: args.tamagotchiState,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Initializes a new TamagotchiState PDA for the virtual pet.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` tamagotchi_state: {@link TamagotchiState} TamagotchiState PDA to be initialized.
 *
 * Data:
 * - owner: {@link PublicKey} PublicKey of the account that owns the TamagotchiState.
 * - name: {@link string} The name to be given to the TamagotchiState.
 */
export const createTamagotchi = (
	args: CreateTamagotchiArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    createTamagotchiBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Initializes a new TamagotchiState PDA for the virtual pet.
 *
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` tamagotchi_state: {@link TamagotchiState} TamagotchiState PDA to be initialized.
 *
 * Data:
 * - owner: {@link PublicKey} PublicKey of the account that owns the TamagotchiState.
 * - name: {@link string} The name to be given to the TamagotchiState.
 */
export const createTamagotchiSendAndConfirm = async (
  args: Omit<CreateTamagotchiArgs, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return createTamagotchiBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

export type FeedTamagotchiArgs = {
  feePayer: web3.PublicKey;
  tamagotchiState: web3.PublicKey;
  owner: web3.PublicKey;
};

/**
 * ### Returns a {@link MethodsBuilder}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` tamagotchi_state: {@link TamagotchiState} TamagotchiState to be updated.
 *
 * Data:
 * - owner: {@link PublicKey} PublicKey of the account. Only the owner can feed their Tamagotchi.
 */
export const feedTamagotchiBuilder = (
	args: FeedTamagotchiArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): MethodsBuilder<TamagotchiGame, never> => {


  return _program
    .methods
    .feedTamagotchi(
      args.owner,
    )
    .accounts({
      feePayer: args.feePayer,
      tamagotchiState: args.tamagotchiState,
    })
    .remainingAccounts(remainingAccounts);
};

/**
 * ### Returns a {@link web3.TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` tamagotchi_state: {@link TamagotchiState} TamagotchiState to be updated.
 *
 * Data:
 * - owner: {@link PublicKey} PublicKey of the account. Only the owner can feed their Tamagotchi.
 */
export const feedTamagotchi = (
	args: FeedTamagotchiArgs,
	remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionInstruction> =>
    feedTamagotchiBuilder(args, remainingAccounts).instruction();

/**
 * ### Returns a {@link web3.TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` tamagotchi_state: {@link TamagotchiState} TamagotchiState to be updated.
 *
 * Data:
 * - owner: {@link PublicKey} PublicKey of the account. Only the owner can feed their Tamagotchi.
 */
export const feedTamagotchiSendAndConfirm = async (
  args: Omit<FeedTamagotchiArgs, "feePayer"> & {
    signers: {
      feePayer: web3.Signer,
    },
  },
  remainingAccounts: Array<web3.AccountMeta> = [],
): Promise<web3.TransactionSignature> => {
  const preInstructions: Array<web3.TransactionInstruction> = [];


  return feedTamagotchiBuilder({
      ...args,
      feePayer: args.signers.feePayer.publicKey,
    }, remainingAccounts)
    .preInstructions(preInstructions)
    .signers([args.signers.feePayer])
    .rpc();
}

// Getters

export const getTamagotchiState = (
    publicKey: web3.PublicKey,
    commitment?: web3.Commitment
): Promise<IdlAccounts<TamagotchiGame>["tamagotchiState"]> => _program.account.tamagotchiState.fetch(publicKey, commitment);
