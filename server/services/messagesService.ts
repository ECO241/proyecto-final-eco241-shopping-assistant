import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://stbqwhdawwukcwyomgfi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0YnF3aGRhd3d1a2N3eW9tZ2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0OTEyMTgsImV4cCI6MjAyOTA2NzIxOH0.n2lqleI1jNhKMl3BeBRxcAY9Fkf4nJxTQm30wk0CFio')

export const messageService = {
    getAllMessagesSupabase: async () => {
        const { data, error } = await supabase
            .from('messages')
            .select()
        if (error) {
            throw new Error(error.message)
        }
        return data
    },
    getMessageByIdSupabase: async (id: number) => {
        const { data, error } = await supabase
            .from('messages')
            .select()
            .eq('id', id)
        if (error) {
            throw new Error(error.message)
        }
        return data
    },
    postMessageSupabase: async (data: messageType) => {
        const { error } = await supabase
        .from('messages')
        .insert(data)
        if (error) {
            throw new Error(error.message)
        }
    }
}

interface messageType {
    userId: string,
    message: string,
    image: string,
    roomId: string
}