export interface Participant {
  id: string
  name: string
  role: number
}

export interface Room {
  name: string
  id: number
  image_url: string
  participant: Participant[]
}

export interface Attachment {
  content_type?: string
  source?: string
}

export interface Comment {
  id: number
  type: string
  message: string
  sender: string
  attachment: Attachment
}

export interface Result {
  room: Room
  comments: Comment[]
}

export interface ChatsResponseDTO {
  results: Result[]
}
