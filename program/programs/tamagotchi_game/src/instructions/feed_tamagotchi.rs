use crate::*;
use anchor_lang::prelude::*;

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` tamagotchi_state: [TamagotchiState] TamagotchiState to be updated.
///
/// Data:
/// - owner: [Pubkey] PublicKey of the account. Only the owner can feed their Tamagotchi.
pub fn handler(
	ctx: Context<FeedTamagotchi>,
	owner: Pubkey,
) -> Result<()> {
    if ctx.accounts.tamagotchi_state.hunger > 0 {
        ctx.accounts.tamagotchi_state.hunger -= 1; // Reduce hunger by 1
    }
    ctx.accounts.tamagotchi_state.last_interaction = Clock::get()?.unix_timestamp; // Update the timestamp

    Ok(())
}
