// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use anchor_lang::prelude::*;

#[account]
pub struct TamagotchiState {
	pub name: String,
	pub hunger: u8,
	pub happiness: u8,
	pub cleanliness: u8,
	pub last_interaction: i64,
}
