use crate::*;
use anchor_lang::prelude::*;

/// Initializes a new TamagotchiState PDA for the virtual pet.
///
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` tamagotchi_state: [TamagotchiState] TamagotchiState PDA to be initialized.
///
/// Data:
/// - owner: [Pubkey] PublicKey of the account that owns the TamagotchiState.
/// - name: [String] The name to be given to the TamagotchiState.
pub fn handler(
	ctx: Context<CreateTamagotchi>,
	owner: Pubkey,
	name: String,
) -> Result<()> {
   
	
	Ok(())
}
