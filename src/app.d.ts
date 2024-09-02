import type { SupabaseClient } from '@supabase/supabase-js'

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient
		}
		// interface PageData {
		// 	session: Session | null
		// }
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
