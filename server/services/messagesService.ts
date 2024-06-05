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
    postMessageSupabase: async (data: messageType, file: any) => {
        const url = await uploadImage(file)


        const { error } = await supabase
            .from('messages')
            .insert({
                ...data,
                image: url
            })

        if (error) {
            throw new Error(error.message)
        }
    }
}

async function uploadImage(file: any) {
    console.log("Subir")
    // Subir el archivo a Supabase Storage
    const { error } = await supabase.storage
        .from('images') // nombre del bucket en Supabase
        .upload(file.originalname, file.buffer);

    console.log(error)
    console.log("Obtener URL")
    // Obtener la URL pública del archivo
    const { data: publicData } = supabase
        .storage
        .from('images')
        .getPublicUrl(file.originalname);
        
    console.log(`PublicData: `)
    console.log(publicData)

    return publicData.publicUrl
}

interface messageType {
    userId: string,
    message: string,
    roomId: string
}