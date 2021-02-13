export interface Timestamp extends String {}

export type ColumnType = "stack" | "queue";

export type ThreadType = "main" | "reply" | "card";

export type ChannelType = "public" | "private" | "direct";

export type Id = string;

export interface Unique {
    id: Id;
}

export interface Timestamped {
    timestamp: Timestamp;
}

export interface Positioned {
    position: number;
}

export interface BelongsToUser {
    user_id: Id;
}

export interface BelongsToCard {
    card_id: Id;
}

export interface BelongsToThread {
    thread_id: Id;
}

export interface BelongsToChannel {
    channel_id: Id;
}

export interface BelongsToWorkspace {
    workspace_id: Id;
}

export namespace io {
    export type PresenceState =
        | "invisible"
        | "offline"
        | "online"
        | "away"
        | "busy"
        | "dnd";

    export interface Site {
        name: string;
        icon: string;
        title: string;
        about: string;
    }

    export interface Auth {
        user: User;
        token: string;
        timestamp: string;
    }

    export interface Config {
        client?: Auth;
        locale: string;
        lpack: { [key: string] : string},
        user_invitation: boolean;
        user_registration: boolean;
        admin_api_version: string;
        client_api_version: string;
        socket_api_version: string;
        admin_api_endpoint: string;
        client_api_endpoint: string;
        socket_api_endpoint: string;
        socket_api_protocol: string;
        auth_providers: [[string, string]];
    }

    export interface Invitation extends Unique {
        user: Author;
        sent: boolean;
        email: string;
        approved: boolean;
        timestamp: string;
        channel_id: string;
        invitee?: Author;
        resolver?: Author;
        resolved_at?: string;
    }

    export interface Preferences {
        theme: string;
        locale: string;
        timezone: string;
        time_format: "12" | "24";
        message_type: "default" | "compact";
        theme_mode: "light" | "dark";
        notifications: boolean;
    }

    export interface Presence {
        state: PresenceState;
        timestamp: string;
        phx_ref?: string;
        phx_ref_prev?: string;
    }

    export interface PresenceSync {
        metas: Presence[];
    }

    export interface Status extends Unique {
        name: string;
        icon: string;
    }

    export interface Author extends Unique {
        name: string;
        avatar: string;
        username: string;
    }

    export interface Reaction {
        name: string;
        user: Author;
        timestamp: string;
        message_id: string;
    }

    export interface User extends Author {
        status_id: string;
    }

    export interface Task extends Unique {
        name: string;
        complete: boolean;
        checklist_id: string;
    }

    export interface Checklist extends Unique, BelongsToCard {
        name: string;
        tasks: Task[];
        user: Author;
        timestamp: string;
    }

    export interface Tag extends Unique {
        name: string;
        color: string;
    }

    export interface CardTag extends Unique, BelongsToCard {
        tag_id: string;
        tagged_at: string;
    }

    export interface Card extends Unique, BelongsToChannel {
        done: boolean;
        name: string;
        user: Author;
        tags: CardTag[];
        position: number;
        deadline: string | null;
        timestamp: string;
        column_id: string;
        description: string;
        checklists: Checklist[];
        archived_at: string | null;
    }

    export interface Column extends Unique, BelongsToChannel {
        name: string;
        type: ColumnType;
        origin: boolean;
        capacity: number;
        position: number;
        archived_at: string | null;
    }

    export interface Membership extends Unique, BelongsToWorkspace {
        user: User;
        role_id: string;
        joined_at: string;
    }

    export interface Member extends Unique, BelongsToChannel {
        user: User;
        role_id: string;
        joined_at: string;
        last_seen_at: string;
        membership_id: string;
    }

    export interface Category extends Unique {
        name: string;
    }

    export interface WorkspacePermissions {}

    export interface WorkspaceRole extends Unique {
        name: string;
        permissions: WorkspacePermissions;
    }

    export interface UsersReaction {
        name: string;
        users: Author[];
    }

    export interface Workspace extends Unique {
        name: string;
        icon: string;
        owner_id: string;
        timestamp: string;
        description: string;
        categories?: Category[];
    }

    export interface UserWorkspace extends Workspace {
        role: WorkspaceRole;
        joined_at: string;
        membership_id: string;
    }

    export interface ChannelPermissions {
        add_reaction: boolean;
        create_card: boolean;
        delete_message: boolean;
        edit_message: boolean;
        embed_links: boolean;
        flag_message: boolean;
        leave_channel: boolean;
        manage_board: boolean;
        manage_channel: boolean;
        manage_messages: boolean;
        mention_members: boolean;
        pin_message: boolean;
        post_message: boolean;
        send_invitation: boolean;
        post_reply: boolean;
        upload_file: boolean;
        upload_limit: number;
        upload_types: string;
        use_markdown: boolean;
    }

    export interface ChannelRole extends Unique, BelongsToChannel {
        name: string;
        is_default: boolean;
    }

    export interface ChannelMemberRole extends ChannelRole {
        permissions: ChannelPermissions;
    }

    export interface Tag extends Unique, BelongsToChannel {
        name: string;
        color: string;
    }

    export interface Channel extends Unique, BelongsToWorkspace {
        icon: string;
        name: string;
        tags?: Tag[];
        header: string;
        purpose: string;
        admin_id: string;
        is_board: boolean;
        is_private: boolean;
        is_archived: boolean;
        main_thread_id: string;
    }

    export interface UserChannel extends Channel {
        permissions: ChannelPermissions;
        member_id: string;
        joined_at: string;
    }

    export interface Thread extends Unique, BelongsToChannel {
        type: string;
        topic: string;
        message_count: number;
        last_message_id: string;
        first_message_id: string;
        unread_message_count: number;
    }

    export interface Message
        extends Unique,
            BelongsToThread,
            BelongsToChannel,
            Timestamped {
        author: Author;
        pinned: boolean;
        content: string;
        flagged: boolean;
        reactions: UsersReaction[];
    }

    export interface UserMessage extends Message {
        flagged: boolean;
    }
}
