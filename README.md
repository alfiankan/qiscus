## Realtime MQTT Based Chat


| Desktop Size | Mobile Size |
|-----------------|-----------------|
| <img width="1397" alt="Screenshot 2024-11-15 at 09 14 37" src="https://github.com/user-attachments/assets/71e35597-cbb5-49dd-8ffb-f48bf43e3c2b">| <img width="214" alt="Screenshot 2024-11-15 at 09 14 49" src="https://github.com/user-attachments/assets/7df0ab10-05c2-4750-9e7f-ea5891a79036">|

## System Design

### High Level View

![](/high-level.png)

The system is quite simple, there is chat service will handle user auth (or call from auth service) and also storing and retreiving chat from the database to chat room, also there is realtime service 
to handle chat room realtime request connection to open mqtt to publish or subscribe chats across participant in the room.


### Chat History and Realtime

![](/realtime-stage.png)


The system can perform pull based message or realtime message (incomingm and sending broadcast) via MQTT, why i choose MQTT its because powerfull QoS and very lightweight for client and 
enough for handling publish and subsribe messaging like (compare to XMPP which more complex to run). The chat client first will retreive chat history at cursor level, so we dont fetch all message
history to reduce database load using cursor pagination, then also the room will open mqtt connection to listen new messages and or send message in realtime, also there is cache to reduce main database load
and faster message retreival.

## Database Design (ERD)

![](/erd.png)

The database design is quite simple and normal, may be need to be denormaliation or other approach in the future if needed, every chat room can handle private messaging (two participant)
or group messaging, depends on the need, attachments and participants is separated table to reduce query examined when we need to see the participants or attachemnts on bigger chat room messages
for this early design i will use some index.

  - users
      - id
      - email
  - chat_room_participants
      - chat_room_id
      - chat_role
  - chat_rooms 
      - id
      - user_id
  - message_attachments
      - chat_room_id
      - message_id
  - messages
      - id
      - user_id
      - composite(chat_room_id, created_at)


### Cursor Queries pPlan

```sql
-- Get messages cursor pagination
SELECT
  messages.id,
  messages.message,
  messages.type,
  users.name,
  users.email,
  users.id
FROM messages
JOIN users ON users.id = messages.user_id
WHERE chat_room_id = 454 AND created_at > '2024-01-01 05:09:10'
LIMIT 100;
```

## Extended JSON Format 

From this json source: 

https://gist.githubusercontent.com/asharijuang/23745f3132fa30e666db68d2bf574e4a/raw/5d556dbb9c2aea9fdf3e1ec96e45f62a88cea7b6/chat_response.json 

extended to this:

https://raw.githubusercontent.com/alfiankan/qiscus/refs/heads/master/fake_json_api/chat.json


## Chat UI

I created the UI using Vue and deployed to https://qiscus.pages.dev to run locally follow this instruction

  - clone this repository
  - run `pnpm install`
  - run `pnpm run dev`

## Chat UI Snapshot
<img width="1397" alt="Screenshot 2024-11-15 at 09 14 37" src="https://github.com/user-attachments/assets/71e35597-cbb5-49dd-8ffb-f48bf43e3c2b">
<img width="214" alt="Screenshot 2024-11-15 at 09 14 49" src="https://github.com/user-attachments/assets/7df0ab10-05c2-4750-9e7f-ea5891a79036">

