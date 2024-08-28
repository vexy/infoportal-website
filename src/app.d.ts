import type { Session } from '@supabase/supabase-js'

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session: Session | null
		}
		interface PageData {
			// session: Session | null
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
