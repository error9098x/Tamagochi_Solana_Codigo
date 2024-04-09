// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

pub mod constants;
pub mod error;
pub mod instructions;
pub mod state;

use anchor_lang::prelude::*;
use std::str::FromStr;

pub use constants::*;
pub use instructions::*;
pub use state::*;

declare_id!("8eY25XgQKkEXwSrcm7u19VW1L1c27SRCKpm2r3UjRBZk");

#[program]
pub mod tamagotchi_game {
    use super::*;

/// Initializes a new TamagotchiState PDA for the virtual pet.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` tamagotchi_state: [TamagotchiState] TamagotchiState PDA to be initialized.
///
/// Data:
/// - owner: [Pubkey] PublicKey of the account that owns the TamagotchiState.
/// - name: [String] The name to be given to the TamagotchiState.
	pub fn create_tamagotchi(ctx: Context<CreateTamagotchi>, owner: Pubkey, name: String) -> Result<()> {
		create_tamagotchi::handler(ctx, owner, name)
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` tamagotchi_state: [TamagotchiState] TamagotchiState to be updated.
///
/// Data:
/// - owner: [Pubkey] PublicKey of the account. Only the owner can feed their Tamagotchi.
	pub fn feed_tamagotchi(ctx: Context<FeedTamagotchi>, owner: Pubkey) -> Result<()> {
		feed_tamagotchi::handler(ctx, owner)
	}


	#[derive(Accounts)]
	#[instruction(
		owner: Pubkey,
		name: String,
	)]
	pub struct CreateTamagotchi<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub tamagotchi_state: Account<'info, TamagotchiState>,
	}

	#[derive(Accounts)]
	#[instruction(
		owner: Pubkey,
	)]
	pub struct FeedTamagotchi<'info> {
		#[account(
			mut,
			owner=Pubkey::from_str("11111111111111111111111111111111").unwrap(),
		)]
		pub fee_payer: Signer<'info>,

		pub tamagotchi_state: Account<'info, TamagotchiState>,
	}
}
