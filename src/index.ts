export * from "./types";
export { Presence } from "./socket";
export { default as socket } from "./socket";
export { default as endpoint } from "./endpoint";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { io } from "./types";
import endpoint from "./endpoint";

export type UpdatePreferencesRequest = Partial<io.Preferences>;

export interface FetchChannelsRequest {
    workspace_id?: string;
}

export interface GetWorkspaceRequest {
    workspace_id: string;
}

export interface UpdateUserProfileRequest {
    name?: string;
    about?: string;
    email?: string;
    phone?: string;
    avatar?: string;
    user_id: string;
    password?: string;
    new_password?: string;
}

export interface SetUserPresenceRequest {
    user_id: string;
    presence: io.PresenceState;
}

export interface SetUserStatusRequest {
    user_id: string;
    status_id: string;
}

export interface CreateChannelRoleRequest {
    channel_id: string;
    name: string;
}

export interface FetchChannelTopicsRequest {
    channel_id: string;
}

export interface CreateTopicRequest {
    channel_id: string;
    topic: string;
}

export interface UpdateTopicRequest {
    channel_id: string;
    thread_id: string;
    is_active?: boolean;
    is_default?: boolean;
    topic?: string;
}

export interface DeleteTopicRequest {
    channel_id: string;
    thread_id: string;
}

export interface FetchMessagesRequest {
    channel_id: string;
    thread_id: string;
    params?: {
        after?: string;
        last?: number;
        before?: string;
        first?: number;
    };
}

export interface MoveCardRequest {
    card_id: string;
    position?: number;
    column_id: string;
    channel_id: string;
}

export interface JoinChannelRequest {
    channel_id: string;
    workspace_id: string;
}

export interface ReactMessageRequest {
    channel_id: string;
    thread_id: string;
    message_id: string;
    name: string;
}

export interface UnreactMessageRequest {
    channel_id: string;
    thread_id: string;
    message_id: string;
    name: string;
}

export interface TagCardRequest {
    tag_id: string;
    card_id: string;
    channel_id: string;
}

export interface UntagCardRequest {
    tag_id: string;
    card_id: string;
    channel_id: string;
}

export interface DeleteCardRequest {
    card_id: string;
    channel_id: string;
}

export interface CreateCardRequest {
    name: string;
    column_id: string;
    channel_id: string;
    description: string;
}

export interface FetchCardsRequest {
    channel_id: string;
    column_id?: string;
}

export interface ArchiveCardRequest {
    card_id: string;
    channel_id: string;
}

export interface UnarchiveCardRequest {
    card_id: string;
    column_id: string;
    channel_id: string;
}

export interface UpdateCardRequest {
    name?: string;
    deadline?: string | null;
    description?: string | null;
    card_id: string;
    channel_id: string;
}

export interface UpdateCardStatusRequest {
    done: boolean;
    card_id: string;
    channel_id: string;
}

export interface CreateTaskRequest {
    channel_id: string;
    name: string;
    checklist_id: string;
}

export interface ArchiveColumnRequest {
    channel_id: string;
    column_id: string;
}

export interface UpdateTaskRequest {
    name?: string;
    complete?: boolean;
    task_id: string;
    channel_id: string;
}

export interface DeleteTaskRequest {
    task_id: string;
    channel_id: string;
}

export interface CreateChecklistRequest {
    channel_id: string;
    card_id: string;
    name: string;
    member_id: string;
}

export interface UpdateChecklistRequest {
    channel_id: string;
    checklist_id: string;
    name?: string;
    member_id?: string;
}

export interface DeleteChecklistRequest {
    channel_id: string;
    checklist_id: string;
}

export interface CreateColumnRequest {
    name: string;
    type: "stack" | "queue";
    origin: boolean;
    capacity: number;
    channel_id: string;
}

export interface UpdateColumnRequest {
    name?: string;
    type?: "stack" | "queue";
    origin?: boolean;
    capacity?: number;
    column_id: string;
    channel_id?: string;
}

export interface MoveColumnRequest {
    position: number;
    column_id: string;
    channel_id: string;
}

export interface DeleteColumnRequest {
    column_id: string;
    channel_id: string;
}

export interface FetchColumnsRequest {
    channel_id: string;
}

export interface CreateWorkspaceRequest {
    name: string;
    icon?: File;
    description: string;
}

export interface UpdateWorkspaceRequest {
    name?: string;
    icon?: File;
    description: string;
}

export interface CreateMembershipRequest {
    user_id: string;
    role_id: string;
}

export interface CreateChannelRequest {
    name: string;
    is_board: boolean;
    is_private: boolean;
    workspace_id: string;
    icon?: File;
    topic?: string;
}

export interface UpdateChannelRequest {
    name?: string;
    icon?: File;
    purpose?: string;
    channel_id: string;
    is_private?: boolean;
}

export interface CreateMemberRequest {
    role_id?: string;
    channel_id: string;
    membership_id: string;
}

export interface UpdateMemberRequest {
    role_id: string;
    member_id: string;
    channel_id: string;
}

export interface UpdateMembershipRequest {
    role_id: string;
    membership_id: string;
}

export interface PostMessageRequest {
    text: string;
    file?: File;
    markdown?: boolean;
    thread_id: string;
    channel_id: string;
}

export interface DeleteMembershipRequest {
    membership_id: string;
}

export interface DeleteMessageRequest {
    thread_id: string;
    message_id: string;
    channel_id: string;
}

export interface PinMessageRequest {
    thread_id: string;
    message_id: string;
    channel_id: string;
}

export interface UnpinMessageRequest {
    thread_id: string;
    message_id: string;
    channel_id: string;
}

export interface FlagMessageRequest {
    thread_id: string;
    message_id: string;
    channel_id: string;
}

export interface CategorizeChannelRequest {
    channel_id: string;
    category_id: string | null;
}

export interface CreateCategoryRequest {
    name: string;
}

export interface SendInvitationRequest {
    email: string;
    message: string;
    channel_id: string;
}

export interface UpdateChannelPermissionsRequest
    extends Partial<Omit<io.ChannelPermissions, "id">> {
    role_id: string;
    channel_id: string;
}

export interface UpdateWorkspacePermissionsRequest
    extends Partial<Omit<io.WorkspacePermissions, "id">> {
    role_id: string;
}

export interface UnflagMessageRequest {
    thread_id: string;
    message_id: string;
    channel_id: string;
}

export interface ArchiveChannelRequest {
    channel_id: string;
}

export interface UnarchiveChannelRequest {
    channel_id: string;
}

export interface DestroyChannelRequest {
    channel_id: string;
}

export interface DestroyWorkspaceRequest {}

export interface DeleteMemberRequest {
    member_id: string;
    channel_id: string;
}

export interface UpdateChannelRoleRequest {
    channel_id: string;
    role_id: string;
    name: string;
}

export interface GetChannelPermissionsRequest {
    role_id: string;
    channel_id: string;
}

export interface FetchChannelMembersRequest {
    channel_id: string;
}

export interface FetchArchivedColumnsRequest {
    channel_id: string;
}

export interface FetchArchivedCardsRequest {
    channel_id: string;
}

export interface FetchWorkspaceMembershipsRequest {
    workspace_id: string;
}

export interface DeleteChannelRoleRequest {
    role_id: string;
    channel_id: string;
}

export interface SetChannelDefaultRoleRequest {
    role_id: string;
    channel_id: string;
}

export interface DeleteTagRequest {
    channel_id: string;
    tag_id: string;
}

export interface CreateTagRequest {
    channel_id: string;
    name: string;
    color: string;
}

export interface UpdateMessageRequest {
    channel_id: string;
    message_id: string;
    thread_id: string;
    text: string;
    markdown?: boolean;
}

export interface LoadThreadRequest {
    channel_id: string;
    thread_id: string;
}

export interface GetChannelRequest {
    channel_id: string;
}

export interface SendInvitationsRequest {
    channel_id: string;
    emails: string[];
}

export interface FetchChannelInvitations {
    channel_id: string;
}

export interface DeleteInvitationRequest {
    channel_id: string;
    invitation_id: string;
}

export interface Interceptor {
    request?: any;
    response?: {
        error?: any;
        success?: any;
    };
}

namespace Client {
    export type Response<T> = Promise<AxiosResponse<T>>;

    export function cancelToken(): CancelTokenSource {
        return axios.CancelToken.source();
    }

    export function intercept(interceptor: Interceptor) {
        if (interceptor.request) {
            endpoint.interceptors.request.use(interceptor.request);
        }
        if (interceptor.response) {
            endpoint.interceptors.response.use(
                interceptor.response.success,
                interceptor.response.error
            );
        }
    }

    export function getConfig() {
        return endpoint.get(`/config`);
    }

    export function getOrg() {
        return endpoint.get(`/org`);
    }

    export function getWorkspace(
        request: GetWorkspaceRequest
    ): Response<io.Workspace> {
        return endpoint.get(`/workspaces/${request.workspace_id}`);
    }

    export function fetchWorkspaces(): Response<io.Workspace[]> {
        return endpoint.get(`/workspaces`);
    }

    export function fetchChannels(
        request: FetchChannelsRequest
    ): Response<io.Channel[]> {
        if (request.workspace_id) {
            return endpoint.get(`/workspaces/${request.workspace_id}/channels`);
        }
        return endpoint.get(`/channels`);
    }

    export function fetchChannelInvitations(
        request: FetchChannelInvitations
    ): Response<io.Invitation[]> {
        return endpoint.get(`/channels/${request.channel_id}/invitations`);
    }

    export function deleteInvitation(
        request: DeleteInvitationRequest
    ): Response<any> {
        return endpoint.delete(
            `/channels/${request.channel_id}/invitations/${request.invitation_id}`
        );
    }

    export function sendInvitations(
        request: SendInvitationsRequest
    ): Response<io.Invitation[]> {
        return endpoint.post(`/channels/${request.channel_id}/invitations`, {
            emails: request.emails,
        });
    }

    export function getPreferences(): Response<io.Preferences> {
        return endpoint.get("/preferences");
    }

    export function updatePreferences(
        payload: UpdatePreferencesRequest
    ): Response<io.Preferences> {
        return endpoint.patch("/preferences", payload);
    }

    export function getAuth(): Response<io.User> {
        return endpoint.get("/auth");
    }

    export function updateUserProfile({
        user_id,
        ...params
    }: UpdateUserProfileRequest): Response<io.User> {
        return endpoint.patch(`/users/${user_id}`, params);
    }

    export function setUserPresence(
        request: SetUserPresenceRequest
    ): Response<any> {
        const path = `/users/${request.user_id}/presence/${request.presence}`;
        return endpoint.post(path);
    }

    export function setUserStatus(
        request: SetUserStatusRequest
    ): Response<io.User> {
        const path = `/users/${request.user_id}/status/${request.status_id}`;
        return endpoint.post(path);
    }

    export function fetchStatuses(): Response<io.Status[]> {
        const path = `/statuses/`;
        return endpoint.get(path);
    }

    export function fetchThreads(): Response<io.Thread[]> {
        const path = `/threads`;
        return endpoint.get(path);
    }

    export function fetchChannelTopics(
        request: FetchChannelTopicsRequest
    ): Response<io.Thread[]> {
        const path = `/channels/${request.channel_id}/topics`;
        return endpoint.get(path);
    }

    export function fetchMessages(
        request: FetchMessagesRequest
    ): Response<io.Message[]> {
        const { channel_id, thread_id, params } = request;
        const path = `/channels/${channel_id}/threads/${thread_id}/messages`;
        return endpoint.get(path, { params });
    }

    export function fetchArchivedChannels(): Response<io.Channel[]> {
        const path = `/archived`;
        return endpoint.get(path);
    }

    export function fetchPublicChannels(): Response<io.Channel[]> {
        const path = `/joinable`;
        return endpoint.get(path);
    }

    export function createTopic(
        request: CreateTopicRequest
    ): Response<io.Thread> {
        const path = `/channels/${request.channel_id}/topics`;
        const params = {
            topic: request.topic,
        };
        return endpoint.post(path, params);
    }

    export function updateTopic(
        request: UpdateTopicRequest
    ): Response<io.Thread> {
        const path = `/channels/${request.channel_id}/topics/${request.thread_id}`;
        const params = {
            is_active: request.is_active,
            is_default: request.is_default,
            topic: request.topic,
        };
        return endpoint.patch(path, params);
    }

    export function deleteTopic(request: DeleteTopicRequest): Response<any> {
        const path = `/channels/${request.channel_id}/topics/${request.thread_id}`;
        return endpoint.delete(path);
    }

    export function getChannel(
        request: GetChannelRequest
    ): Response<io.Channel> {
        const path = `/channels/${request.channel_id}`;
        return endpoint.get(path);
    }

    export function archiveChannel(
        request: ArchiveChannelRequest
    ): Response<io.Channel> {
        const path = `/channels/${request.channel_id}/archive`;
        return endpoint.put(path);
    }

    export function unarchiveChannel(request: UnarchiveChannelRequest) {
        const path = `/channels/${request.channel_id}/unarchive`;
        return endpoint.put(path);
    }

    export function reactMessage(
        request: ReactMessageRequest
    ): Response<io.Message> {
        const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages/${request.message_id}/react/${request.name}`;
        return endpoint.post(path);
    }

    export function unreactMessage(
        request: UnreactMessageRequest
    ): Response<io.Message> {
        const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages/${request.message_id}/react/${request.name}`;
        return endpoint.delete(path);
    }

    export namespace workspace {
        export function create(request: CreateWorkspaceRequest) {}

        export function update(request: UpdateWorkspaceRequest) {}

        export function destroy(request: DestroyWorkspaceRequest) {}

        export function createCategory(request: CreateCategoryRequest) {}

        export function fetchMemberships(
            request: FetchWorkspaceMembershipsRequest
        ): Response<io.Membership[]> {
            const path = `/workspaces/${request.workspace_id}/memberships`;
            return endpoint.get(path);
        }

        export function createMembership(request: CreateMembershipRequest) {}

        export function deleteMembership(request: DeleteMembershipRequest) {}

        export function updateMembership(request: UpdateMembershipRequest) {}

        export function updatePermissions({
            ...params
        }: UpdateWorkspacePermissionsRequest) {}
    }

    export namespace channel {
        export function create(
            request: CreateChannelRequest
        ): Response<io.Channel> {
            const path = `/workspaces/${request.workspace_id}/channels`;
            const params = {
                name: request.name,
                icon: request.icon,
                topic: request.topic,
                is_private: request.is_private,
                is_board: request.is_board,
            };
            return endpoint.post(path, params);
        }

        export function loadThread(
            request: LoadThreadRequest
        ): Response<io.Thread> {
            const path = `/channels/${request.channel_id}/threads/${request.thread_id}`;
            return endpoint.get(path);
        }

        export function joinChannel(
            request: JoinChannelRequest
        ): Response<io.Channel> {
            const path = `/workspaces/${request.workspace_id}/channels/${request.channel_id}/join`;
            return endpoint.post(path);
        }

        export function update(
            request: UpdateChannelRequest
        ): Response<io.Channel> {
            const { channel_id, ...params } = request;
            const path = `/channels/${channel_id}`;
            return endpoint.patch(path, params);
        }

        export function destroy(request: DestroyChannelRequest): Response<any> {
            const path = `/channels/${request.channel_id}`;
            return endpoint.delete(path);
        }

        export function categorize(
            request: CategorizeChannelRequest
        ): Response<io.Channel> {
            const path = `/channels/${request.channel_id}`;
            const params = { category_id: request.category_id };
            return endpoint.patch(path, params);
        }

        export function postMessage(
            request: PostMessageRequest
        ): Response<io.Message> {
            const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages`;
            const params = new FormData();
            params.append("text", request.text);
            if (request.file) {
                params.append("file", request.file);
            }

            if (request.markdown == true || request.markdown == false) {
                params.append("markdown", request.markdown ? "1" : "0");
            }
            return endpoint.post(path, params);
        }

        export function fetchRoles(request: {
            channel_id: string;
        }): Response<io.ChannelMemberRole[]> {
            const path = `/channels/${request.channel_id}/roles`;
            return endpoint.get(path);
        }

        export function fetchMembers(
            request: FetchChannelMembersRequest
        ): Response<io.Member[]> {
            const path = `/channels/${request.channel_id}/members`;
            return endpoint.get(path);
        }

        export function pinMessage(
            request: PinMessageRequest
        ): Response<io.Message> {
            const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages/${request.message_id}/pin`;
            return endpoint.put(path);
        }

        export function unpinMessage(
            request: UnpinMessageRequest
        ): Response<io.Message> {
            const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages/${request.message_id}/pin`;
            return endpoint.delete(path);
        }

        export function flagMessage(
            request: FlagMessageRequest
        ): Response<io.Message> {
            const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages/${request.message_id}/flag`;
            return endpoint.put(path);
        }

        export function unflagMessage(request: UnflagMessageRequest) {
            const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages/${request.message_id}/flag`;
            return endpoint.delete(path);
        }

        export function createMember(
            request: CreateMemberRequest
        ): Response<io.Member> {
            const path = `/channels/${request.channel_id}/members`;
            const params = {
                membership_id: request.membership_id,
                role_id: request.role_id,
            };
            return endpoint.post(path, params);
        }

        export function updateMember(
            request: UpdateMemberRequest
        ): Response<io.Member> {
            const path = `/channels/${request.channel_id}/members/${request.member_id}`;
            const params = { role_id: request.role_id };
            return endpoint.patch(path, params);
        }

        export function deleteMessage(
            request: DeleteMessageRequest
        ): Response<any> {
            const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages/${request.message_id}`;
            return endpoint.delete(path);
        }

        export function updateMessage(
            request: UpdateMessageRequest
        ): Response<io.Message> {
            const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages/${request.message_id}`;
            const params = {
                text: request.text,
                markdown: request.markdown,
            };
            return endpoint.patch(path, params);
        }

        export function deleteMember(
            request: DeleteMemberRequest
        ): Response<any> {
            const path = `/channels/${request.channel_id}/members/${request.member_id}`;
            return endpoint.delete(path);
        }

        export function fetchArchivedCards(
            request: FetchArchivedCardsRequest
        ): Response<io.Card[]> {
            const path = `/channels/${request.channel_id}/cards?archived`;
            return endpoint.get(path);
        }

        export function fetchArchivedColumns(
            request: FetchArchivedColumnsRequest
        ): Response<io.Column[]> {
            const path = `/channels/${request.channel_id}/columns?archived`;
            return endpoint.get(path);
        }

        export function getChannelPermissions(
            request: GetChannelPermissionsRequest
        ): Response<io.ChannelPermissions> {
            const path = `/channels/${request.channel_id}/roles/${request.role_id}/permissions`;
            return endpoint.get(path);
        }

        export function setDefaultRole(
            request: SetChannelDefaultRoleRequest
        ): Response<io.ChannelRole> {
            const path = `/channels/${request.channel_id}/roles/${request.role_id}/default`;
            return endpoint.post(path);
        }

        export function updateRole({
            channel_id,
            role_id,
            ...params
        }: UpdateChannelRoleRequest): Response<io.ChannelMemberRole> {
            const path = `/channels/${channel_id}/roles/${role_id}`;
            return endpoint.patch(path, params);
        }

        export function createRole(
            params: CreateChannelRoleRequest
        ): Response<io.ChannelMemberRole> {
            const path = `/channels/${params.channel_id}/roles`;
            return endpoint.post(path, { name: params.name });
        }

        export function deleteRole(
            params: DeleteChannelRoleRequest
        ): Response<any> {
            const path = `/channels/${params.channel_id}/roles/${params.role_id}`;
            return endpoint.delete(path);
        }

        export function updatePermissions({
            channel_id,
            role_id,
            ...params
        }: UpdateChannelPermissionsRequest): Response<io.ChannelPermissions> {
            const path = `/channels/${channel_id}/roles/${role_id}/permissions`;
            return endpoint.patch(path, params);
        }

        export function createTag(request: CreateTagRequest): Response<io.Tag> {
            const path = `/channels/${request.channel_id}/tags`;
            const params = { name: request.name, color: request.color };
            return endpoint.post(path, params);
        }

        export function deleteTag(params: DeleteTagRequest): Response<any> {
            const path = `/channels/${params.channel_id}/tags/${params.tag_id}`;
            return endpoint.delete(path);
        }
    }

    export namespace board {
        export function fetchColumns(
            request: FetchColumnsRequest
        ): Response<io.Column[]> {
            const path = `/channels/${request.channel_id}/columns`;
            return endpoint.get(path);
        }

        export function createColumn(
            request: CreateColumnRequest
        ): Response<io.Column> {
            const path = `/channels/${request.channel_id}/columns`;
            const params = {
                name: request.name,
                type: request.type,
                origin: request.origin,
                capacity: request.capacity,
            };
            return endpoint.post(path, params);
        }

        export function archiveColumn(
            request: ArchiveColumnRequest
        ): Response<io.Column> {
            const path = `/channels/${request.channel_id}/columns/${request.column_id}/archive`;
            return endpoint.post(path);
        }

        export function unarchiveColumn(
            request: ArchiveColumnRequest
        ): Response<io.Column> {
            const path = `/channels/${request.channel_id}/columns/${request.column_id}/unarchive`;
            return endpoint.post(path);
        }

        export function updateColumn(
            request: UpdateColumnRequest
        ): Response<io.Column> {
            const path = `/channels/${request.channel_id}/columns/${request.column_id}`;
            const params = {
                name: request.name,
                type: request.type,
                origin: request.origin,
                capacity: request.capacity,
            };
            return endpoint.patch(path, params);
        }

        export function moveColumn(
            request: MoveColumnRequest
        ): Response<io.Column> {
            const path = `/channels/${request.channel_id}/columns/${request.column_id}/move`;
            const params = {
                position: request.position,
            };
            return endpoint.put(path, params);
        }

        export function deleteColumn(
            request: DeleteColumnRequest
        ): Response<any> {
            const path = `/channels/${request.channel_id}/columns/${request.column_id}`;
            return endpoint.delete(path);
        }

        export function createChecklist(
            request: CreateChecklistRequest
        ): Response<io.Checklist> {
            const path = `/channels/${request.channel_id}/cards/${request.card_id}/checklists`;
            const params = {
                name: request.name,
                member_id: request.member_id,
            };
            return endpoint.post(path, params);
        }

        export function updateChecklist(
            request: UpdateChecklistRequest
        ): Response<io.Checklist> {
            const path = `/channels/${request.channel_id}/checklists/${request.checklist_id}`;
            const params = {
                name: request.name,
                member_id: request.member_id,
            };
            return endpoint.patch(path, params);
        }

        export function deleteChecklist(
            request: DeleteChecklistRequest
        ): Response<any> {
            const path = `/channels/${request.channel_id}/checklists/${request.checklist_id}`;
            return endpoint.delete(path);
        }

        export function createTask(
            request: CreateTaskRequest
        ): Response<io.Task> {
            const path = `/channels/${request.channel_id}/checklists/${request.checklist_id}/tasks`;
            const params = { name: request.name };
            return endpoint.post(path, params);
        }

        export function updateTask(
            request: UpdateTaskRequest
        ): Response<io.Task> {
            const path = `/channels/${request.channel_id}/tasks/${request.task_id}`;
            const params = { name: request.name, complete: request.complete };
            return endpoint.patch(path, params);
        }

        export function deleteTask(request: DeleteTaskRequest): Response<any> {
            const path = `/channels/${request.channel_id}/tasks/${request.task_id}`;
            return endpoint.delete(path);
        }

        export function fetchCards(
            request: FetchCardsRequest
        ): Response<io.Card[]> {
            let url: string;
            if (request.column_id != null) {
                url = `/channels/${request.channel_id}/columns/${request.column_id}/cards`;
            } else {
                url = `/channels/${request.channel_id}/cards`;
            }
            return endpoint.get(url);
        }

        export function createCard(
            payload: CreateCardRequest
        ): Response<io.Card> {
            const params = {
                name: payload.name,
                description: payload.description,
            };
            const url = `/channels/${payload.channel_id}/columns/${payload.column_id}/cards`;
            return endpoint.post(url, params);
        }

        export function deleteCard(
            request: DeleteCardRequest
        ): Response<Partial<io.Card>> {
            const url = `/channels/${request.channel_id}/cards/${request.card_id}`;
            return endpoint.delete(url);
        }

        export function archiveCard(
            request: ArchiveCardRequest
        ): Response<io.Card> {
            const url = `/channels/${request.channel_id}/cards/${request.card_id}/archive`;
            return endpoint.put(url);
        }

        export function unarchiveCard(request: UnarchiveCardRequest) {
            return moveCard(request);
        }

        export function moveCard(request: MoveCardRequest): Response<io.Card> {
            const params = {
                position: request.position,
                column_id: request.column_id,
            };
            const path = `/channels/${request.channel_id}/cards/${request.card_id}/move`;
            return endpoint.put(path, params);
        }

        export function markAsDone(
            request: UpdateCardStatusRequest
        ): Response<io.Card> {
            const path = `/channels/${request.channel_id}/cards/${request.card_id}`;
            const params = {
                done: request.done,
            };
            return endpoint.post(path, params);
        }

        export function updateCard(
            request: UpdateCardRequest
        ): Response<io.Card> {
            const path = `/channels/${request.channel_id}/cards/${request.card_id}`;
            const params = {
                name: request.name,
                deadline: request.deadline,
                description: request.description,
            };
            return endpoint.patch(path, params);
        }

        export function tagCard(request: TagCardRequest): Response<io.CardTag> {
            const path = `/channels/${request.channel_id}/cards/${request.card_id}/tags`;
            const params = { tag_id: request.tag_id };
            return endpoint.put(path, params);
        }

        export function untagCard(
            request: UntagCardRequest
        ): Response<string | null> {
            const path = `/channels/${request.channel_id}/cards/${request.card_id}/tags/${request.tag_id}`;
            return endpoint.delete(path);
        }
    }
}

const client = Client;

export default client;
