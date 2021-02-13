export * from "./types";
export { Presence } from "./socket";
export { default as socket } from "./socket";
export { default as endpoint, Endpoint, Response, CancelToken, CancelTokenSource } from "./endpoint";
import { io } from "./types";
import endpoint, { Endpoint, Response, CancelToken, CancelTokenSource } from "./endpoint";

export type UpdatePreferencesRequest = Partial<io.Preferences>;

export interface FetchChannelsRequest {
    workspace_id?: string;
}

export interface CompleteTaskRequest {
    task_id: string;
    channel_id: string;
}

export interface MarkCardAsDoneRequest {
    card_id: string;
    channel_id: string;
}

export interface MarkCardAsUndoneRequest {
    card_id: string;
    channel_id: string;
}

export interface UncompleteTaskRequest {
    task_id: string;
    channel_id: string;
}

export interface GetWorkspaceRequest {
    workspace_id: string;
}

export interface LoginRequest {
    email: string;
    password: string;
    remember_me?: boolean;
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
    presence: io.PresenceState;
}

export interface SetUserStatusRequest {
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

class Client {
    endpoint: Endpoint;

    constructor(endpoint: Endpoint) {
        this.endpoint = endpoint;
    }

    static create(endpoint: Endpoint){
        return new Client(endpoint);
    }

    setEndpoint(endpoint: Endpoint){
        this.endpoint = endpoint;
    }

    cancelToken(): CancelTokenSource {
        return endpoint.CancelToken.source();
    }

    intercept(interceptor: Interceptor) {
        if (interceptor.request) {
            this.endpoint.interceptors.request.use(interceptor.request);
        }
        if (interceptor.response) {
            this.endpoint.interceptors.response.use(
                interceptor.response.success,
                interceptor.response.error
            );
        }
    }

    getConfig(cancelToken?: CancelToken): Response<io.Config> {
        return this.endpoint.get(`/config`, {cancelToken});
    }

    getSite(cancelToken?: CancelToken): Response<io.Site> {
        return this.endpoint.get(`/site`, {cancelToken});
    }

    getWorkspace(request: GetWorkspaceRequest, cancelToken?: CancelToken): Response<io.Workspace> {
        return this.endpoint.get(`/workspaces/${request.workspace_id}`, {cancelToken});
    }

    fetchWorkspaces(cancelToken?: CancelToken): Response<io.Workspace[]> {
        return this.endpoint.get(`/workspaces`, {cancelToken});
    }

    fetchChannels(request: FetchChannelsRequest, cancelToken?: CancelToken): Response<io.Channel[]> {
        if (request.workspace_id) {
            return this.endpoint.get(
                `/workspaces/${request.workspace_id}/channels`
            , {cancelToken});
        }
        return this.endpoint.get(`/channels`, {cancelToken});
    }

    fetchChannelInvitations(
        request: FetchChannelInvitations
    , cancelToken?: CancelToken): Response<io.Invitation[]> {
        return this.endpoint.get(`/channels/${request.channel_id}/invitations`, {cancelToken});
    }

    deleteInvitation(request: DeleteInvitationRequest, cancelToken?: CancelToken): Response<any> {
        return this.endpoint.delete(
            `/channels/${request.channel_id}/invitations/${request.invitation_id}`
        , {cancelToken});
    }

    sendInvitations(
        request: SendInvitationsRequest
    , cancelToken?: CancelToken): Response<io.Invitation[]> {
        return this.endpoint.post(
            `/channels/${request.channel_id}/invitations`,
            {
                emails: request.emails,
            }
        , {cancelToken});
    }

    getPreferences(cancelToken?: CancelToken): Response<io.Preferences> {
        return this.endpoint.get("/preferences", {cancelToken});
    }

    updatePreferences(
        payload: UpdatePreferencesRequest
    , cancelToken?: CancelToken): Response<io.Preferences> {
        return this.endpoint.patch("/preferences", payload, {cancelToken});
    }

    getAuth(cancelToken?: CancelToken): Response<io.User> {
        return this.endpoint.get("/auth", {cancelToken});
    }

    login(params: LoginRequest): Response<io.Config> {
        return this.endpoint.post("/login", params);
    }

    logout(): Response<any> {
        return this.endpoint.post("/logout")
    }

    updateUserProfile({
        user_id,
        ...params
    }: UpdateUserProfileRequest, cancelToken?: CancelToken): Response<io.User> {
        return this.endpoint.patch(`/users/${user_id}`, params, {cancelToken});
    }

    setUserPresence(request: SetUserPresenceRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/user/presence/${request.presence}`;
        return this.endpoint.post(path, {cancelToken});
    }

    setUserStatus(request: SetUserStatusRequest, cancelToken?: CancelToken): Response<io.User> {
        const path = `/user/status/${request.status_id}`;
        return this.endpoint.post(path, {cancelToken});
    }

    fetchStatuses(cancelToken?: CancelToken): Response<io.Status[]> {
        const path = `/statuses/`;
        return this.endpoint.get(path, {cancelToken});
    }

    fetchThreads(cancelToken?: CancelToken): Response<io.Thread[]> {
        const path = `/threads`;
        return this.endpoint.get(path, {cancelToken});
    }

    fetchChannelTopics(
        request: FetchChannelTopicsRequest
    , cancelToken?: CancelToken): Response<io.Thread[]> {
        const path = `/channels/${request.channel_id}/topics`;
        return this.endpoint.get(path, {cancelToken});
    }

    fetchMessages(request: FetchMessagesRequest, cancelToken?: CancelToken): Response<io.Message[]> {
        const { channel_id, thread_id, params } = request;
        const path = `/channels/${channel_id}/threads/${thread_id}/messages`;
        return this.endpoint.get(path, { params, cancelToken });
    }

    fetchArchivedChannels(cancelToken?: CancelToken): Response<io.Channel[]> {
        const path = `/archived`;
        return this.endpoint.get(path, {cancelToken});
    }

    fetchPublicChannels(cancelToken?: CancelToken): Response<io.Channel[]> {
        const path = `/joinable`;
        return this.endpoint.get(path, {cancelToken});
    }

    createTopic(request: CreateTopicRequest, cancelToken?: CancelToken): Response<io.Thread> {
        const path = `/channels/${request.channel_id}/topics`;
        const params = {
            topic: request.topic,
        };
        return this.endpoint.post(path, params, {cancelToken});
    }

    updateTopic(request: UpdateTopicRequest, cancelToken?: CancelToken): Response<io.Thread> {
        const path = `/channels/${request.channel_id}/topics/${request.thread_id}`;
        const params = {
            is_active: request.is_active,
            is_default: request.is_default,
            topic: request.topic,
        };
        return this.endpoint.patch(path, params, {cancelToken});
    }

    deleteTopic(request: DeleteTopicRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/channels/${request.channel_id}/topics/${request.thread_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    getChannel(request: GetChannelRequest, cancelToken?: CancelToken): Response<io.Channel> {
        const path = `/channels/${request.channel_id}`;
        return this.endpoint.get(path, {cancelToken});
    }

    archiveChannel(request: ArchiveChannelRequest, cancelToken?: CancelToken): Response<io.Channel> {
        const path = `/channels/${request.channel_id}/archive`;
        return this.endpoint.put(path, {cancelToken});
    }

    unarchiveChannel(request: UnarchiveChannelRequest, cancelToken?: CancelToken): Response<io.UserChannel> {
        const path = `/channels/${request.channel_id}/unarchive`;
        return this.endpoint.put(path, {cancelToken});
    }

    reactMessage(request: ReactMessageRequest, cancelToken?: CancelToken): Response<io.Message> {
        const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages/${request.message_id}/react/${request.name}`;
        return this.endpoint.post(path, {cancelToken});
    }

    unreactMessage(request: UnreactMessageRequest, cancelToken?: CancelToken): Response<io.Message> {
        const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages/${request.message_id}/react/${request.name}`;
        return this.endpoint.delete(path, {cancelToken});
    }
    fetchMemberships(
        request: FetchWorkspaceMembershipsRequest
    , cancelToken?: CancelToken): Response<io.Membership[]> {
        const path = `/workspaces/${request.workspace_id}/memberships`;
        return this.endpoint.get(path, {cancelToken});
    }

    createChannel(request: CreateChannelRequest, cancelToken?: CancelToken): Response<io.Channel> {
        const path = `/workspaces/${request.workspace_id}/channels`;
        const params = {
            name: request.name,
            icon: request.icon,
            topic: request.topic,
            is_private: request.is_private,
            is_board: request.is_board,
        };
        return this.endpoint.post(path, params, {cancelToken});
    }

    loadThread(request: LoadThreadRequest, cancelToken?: CancelToken): Response<io.Thread> {
        const path = `/channels/${request.channel_id}/threads/${request.thread_id}`;
        return this.endpoint.get(path, {cancelToken});
    }

    joinChannel(request: JoinChannelRequest, cancelToken?: CancelToken): Response<io.Channel> {
        const path = `/workspaces/${request.workspace_id}/channels/${request.channel_id}/join`;
        return this.endpoint.post(path, {cancelToken});
    }

    updateChannel(request: UpdateChannelRequest, cancelToken?: CancelToken): Response<io.Channel> {
        const { channel_id, ...params } = request;
        const path = `/channels/${channel_id}`;
        return this.endpoint.patch(path, params, {cancelToken});
    }

    destroy(request: DestroyChannelRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/channels/${request.channel_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    categorize(request: CategorizeChannelRequest, cancelToken?: CancelToken): Response<io.Channel> {
        const path = `/channels/${request.channel_id}`;
        const params = { category_id: request.category_id };
        return this.endpoint.patch(path, params, {cancelToken});
    }

    postMessage(request: PostMessageRequest, cancelToken?: CancelToken): Response<io.Message> {
        const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages`;
        const params = new FormData();
        params.append("text", request.text);
        if (request.file) {
            params.append("file", request.file);
        }

        if (request.markdown == true || request.markdown == false) {
            params.append("markdown", request.markdown ? "1" : "0");
        }
        return this.endpoint.post(path, params, {cancelToken});
    }

    fetchRoles(request: {
        channel_id: string;
    }, cancelToken?: CancelToken): Response<io.ChannelMemberRole[]> {
        const path = `/channels/${request.channel_id}/roles`;
        return this.endpoint.get(path, {cancelToken});
    }

    fetchChannelMembers(
        request: FetchChannelMembersRequest
    , cancelToken?: CancelToken): Response<io.Member[]> {
        const path = `/channels/${request.channel_id}/members`;
        return this.endpoint.get(path, {cancelToken});
    }

    pinMessage(request: PinMessageRequest, cancelToken?: CancelToken): Response<io.Message> {
        const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages/${request.message_id}/pin`;
        return this.endpoint.put(path, {cancelToken});
    }

    unpinMessage(request: UnpinMessageRequest, cancelToken?: CancelToken): Response<io.Message> {
        const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages/${request.message_id}/pin`;
        return this.endpoint.delete(path, {cancelToken});
    }

    flagMessage(request: FlagMessageRequest, cancelToken?: CancelToken): Response<io.Message> {
        const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages/${request.message_id}/flag`;
        return this.endpoint.put(path, {cancelToken});
    }

    unflagMessage(request: UnflagMessageRequest, cancelToken?: CancelToken): Response<io.Message> {
        const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages/${request.message_id}/flag`;
        return this.endpoint.delete(path, {cancelToken});
    }

    createChannelMember(request: CreateMemberRequest, cancelToken?: CancelToken): Response<io.Member> {
        const path = `/channels/${request.channel_id}/members`;
        const params = {
            membership_id: request.membership_id,
            role_id: request.role_id,
        };
        return this.endpoint.post(path, params, {cancelToken});
    }

    updateChannelMember(request: UpdateMemberRequest, cancelToken?: CancelToken): Response<io.Member> {
        const path = `/channels/${request.channel_id}/members/${request.member_id}`;
        const params = { role_id: request.role_id };
        return this.endpoint.patch(path, params, {cancelToken});
    }

    deleteChannelMember(request: DeleteMemberRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/channels/${request.channel_id}/members/${request.member_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    deleteMessage(request: DeleteMessageRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages/${request.message_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    updateMessage(request: UpdateMessageRequest, cancelToken?: CancelToken): Response<io.Message> {
        const path = `/channels/${request.channel_id}/threads/${request.thread_id}/messages/${request.message_id}`;
        const params = {
            text: request.text,
            markdown: request.markdown,
        };
        return this.endpoint.patch(path, params, {cancelToken});
    }

    fetchArchivedCards(
        request: FetchArchivedCardsRequest
    , cancelToken?: CancelToken): Response<io.Card[]> {
        const path = `/channels/${request.channel_id}/cards?archived`;
        return this.endpoint.get(path, {cancelToken});
    }

    fetchArchivedColumns(
        request: FetchArchivedColumnsRequest
    , cancelToken?: CancelToken): Response<io.Column[]> {
        const path = `/channels/${request.channel_id}/columns?archived`;
        return this.endpoint.get(path, {cancelToken});
    }

    getChannelPermissions(
        request: GetChannelPermissionsRequest
    , cancelToken?: CancelToken): Response<io.ChannelPermissions> {
        const path = `/channels/${request.channel_id}/roles/${request.role_id}/permissions`;
        return this.endpoint.get(path, {cancelToken});
    }

    setDefaultRole(
        request: SetChannelDefaultRoleRequest
    , cancelToken?: CancelToken): Response<io.ChannelRole> {
        const path = `/channels/${request.channel_id}/roles/${request.role_id}/default`;
        return this.endpoint.post(path, {cancelToken});
    }

    updateRole({
        channel_id,
        role_id,
        ...params
    }: UpdateChannelRoleRequest, cancelToken?: CancelToken): Response<io.ChannelMemberRole> {
        const path = `/channels/${channel_id}/roles/${role_id}`;
        return this.endpoint.patch(path, params, {cancelToken});
    }

    createRole(
        params: CreateChannelRoleRequest
    , cancelToken?: CancelToken): Response<io.ChannelMemberRole> {
        const path = `/channels/${params.channel_id}/roles`;
        return this.endpoint.post(path, { name: params.name }, {cancelToken});
    }

    deleteRole(params: DeleteChannelRoleRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/channels/${params.channel_id}/roles/${params.role_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    updatePermissions({
        channel_id,
        role_id,
        ...params
    }: UpdateChannelPermissionsRequest, cancelToken?: CancelToken): Response<io.ChannelPermissions> {
        const path = `/channels/${channel_id}/roles/${role_id}/permissions`;
        return this.endpoint.patch(path, params, {cancelToken});
    }

    createTag(request: CreateTagRequest, cancelToken?: CancelToken): Response<io.Tag> {
        const path = `/channels/${request.channel_id}/tags`;
        const params = { name: request.name, color: request.color };
        return this.endpoint.post(path, params, {cancelToken});
    }

    deleteTag(params: DeleteTagRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/channels/${params.channel_id}/tags/${params.tag_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }
    fetchColumns(request: FetchColumnsRequest, cancelToken?: CancelToken): Response<io.Column[]> {
        const path = `/channels/${request.channel_id}/columns`;
        return this.endpoint.get(path, {cancelToken});
    }

    createColumn(request: CreateColumnRequest, cancelToken?: CancelToken): Response<io.Column> {
        const path = `/channels/${request.channel_id}/columns`;
        const params = {
            name: request.name,
            type: request.type,
            origin: request.origin,
            capacity: request.capacity,
        };
        return this.endpoint.post(path, params, {cancelToken});
    }

    archiveColumn(request: ArchiveColumnRequest, cancelToken?: CancelToken): Response<io.Column> {
        const path = `/channels/${request.channel_id}/columns/${request.column_id}/archive`;
        return this.endpoint.post(path, {cancelToken});
    }

    unarchiveColumn(request: ArchiveColumnRequest, cancelToken?: CancelToken): Response<io.Column> {
        const path = `/channels/${request.channel_id}/columns/${request.column_id}/unarchive`;
        return this.endpoint.post(path, {cancelToken});
    }

    updateColumn(request: UpdateColumnRequest, cancelToken?: CancelToken): Response<io.Column> {
        const path = `/channels/${request.channel_id}/columns/${request.column_id}`;
        const params = {
            name: request.name,
            type: request.type,
            origin: request.origin,
            capacity: request.capacity,
        };
        return this.endpoint.patch(path, params, {cancelToken});
    }

    moveColumn(request: MoveColumnRequest, cancelToken?: CancelToken): Response<io.Column> {
        const path = `/channels/${request.channel_id}/columns/${request.column_id}/move`;
        const params = {
            position: request.position,
        };
        return this.endpoint.put(path, params, {cancelToken});
    }

    deleteColumn(request: DeleteColumnRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/channels/${request.channel_id}/columns/${request.column_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    createChecklist(request: CreateChecklistRequest, cancelToken?: CancelToken): Response<io.Checklist> {
        const path = `/channels/${request.channel_id}/cards/${request.card_id}/checklists`;
        const params = {
            name: request.name,
            member_id: request.member_id,
        };
        return this.endpoint.post(path, params, {cancelToken});
    }

    updateChecklist(request: UpdateChecklistRequest, cancelToken?: CancelToken): Response<io.Checklist> {
        const path = `/channels/${request.channel_id}/checklists/${request.checklist_id}`;
        const params = {
            name: request.name,
            member_id: request.member_id,
        };
        return this.endpoint.patch(path, params, {cancelToken});
    }

    deleteChecklist(request: DeleteChecklistRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/channels/${request.channel_id}/checklists/${request.checklist_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    createTask(request: CreateTaskRequest, cancelToken?: CancelToken): Response<io.Task> {
        const path = `/channels/${request.channel_id}/checklists/${request.checklist_id}/tasks`;
        const params = { name: request.name };
        return this.endpoint.post(path, params, {cancelToken});
    }

    updateTask(request: UpdateTaskRequest, cancelToken?: CancelToken): Response<io.Task> {
        const path = `/channels/${request.channel_id}/tasks/${request.task_id}`;
        const params = { name: request.name };
        return this.endpoint.patch(path, params, {cancelToken});
    }

    completeTask(request: CompleteTaskRequest, cancelToken?: CancelToken): Response<io.Task> {
        const path = `/channels/${request.channel_id}/tasks/${request.task_id}/complete`;
        return this.endpoint.put(path, {cancelToken});
    }

    uncompleteTask(request: UncompleteTaskRequest, cancelToken?: CancelToken): Response<io.Task> {
        const path = `/channels/${request.channel_id}/tasks/${request.task_id}/uncomplete`;
        return this.endpoint.put(path, {cancelToken});
    }

    deleteTask(request: DeleteTaskRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/channels/${request.channel_id}/tasks/${request.task_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    fetchCards(request: FetchCardsRequest, cancelToken?: CancelToken): Response<io.Card[]> {
        let url: string;
        if (request.column_id != null) {
            url = `/channels/${request.channel_id}/columns/${request.column_id}/cards`;
        } else {
            url = `/channels/${request.channel_id}/cards`;
        }
        return this.endpoint.get(url, {cancelToken});
    }

    createCard(payload: CreateCardRequest, cancelToken?: CancelToken): Response<io.Card> {
        const params = {
            name: payload.name,
            description: payload.description,
        };
        const url = `/channels/${payload.channel_id}/columns/${payload.column_id}/cards`;
        return this.endpoint.post(url, params, {cancelToken});
    }

    deleteCard(request: DeleteCardRequest, cancelToken?: CancelToken): Response<Partial<io.Card>> {
        const url = `/channels/${request.channel_id}/cards/${request.card_id}`;
        return this.endpoint.delete(url, {cancelToken});
    }

    archiveCard(request: ArchiveCardRequest, cancelToken?: CancelToken): Response<io.Card> {
        const url = `/channels/${request.channel_id}/cards/${request.card_id}/archive`;
        return this.endpoint.put(url, {cancelToken});
    }

    unarchiveCard(request: UnarchiveCardRequest, cancelToken?: CancelToken) {
        return this.moveCard(request, cancelToken);
    }

    moveCard(request: MoveCardRequest, cancelToken?: CancelToken): Response<io.Card> {
        const params = {
            position: request.position,
            column_id: request.column_id,
        };
        const path = `/channels/${request.channel_id}/cards/${request.card_id}/move`;
        return this.endpoint.put(path, params, {cancelToken});
    }

    markCardAsDone(request: MarkCardAsDoneRequest, cancelToken?: CancelToken): Response<io.Card> {
        const path = `/channels/${request.channel_id}/cards/${request.card_id}/done`;
        return this.endpoint.put(path, {cancelToken});
    }

    markCardAsUndone(request: MarkCardAsUndoneRequest, cancelToken?: CancelToken): Response<io.Card> {
        const path = `/channels/${request.channel_id}/cards/${request.card_id}/undone`;
        return this.endpoint.put(path, {cancelToken});
    }

    updateCard(request: UpdateCardRequest, cancelToken?: CancelToken): Response<io.Card> {
        const path = `/channels/${request.channel_id}/cards/${request.card_id}`;
        const params = {
            name: request.name,
            deadline: request.deadline,
            description: request.description,
        };
        return this.endpoint.patch(path, params, {cancelToken});
    }

    tagCard(request: TagCardRequest, cancelToken?: CancelToken): Response<io.CardTag> {
        const path = `/channels/${request.channel_id}/cards/${request.card_id}/tags`;
        const params = { tag_id: request.tag_id };
        return this.endpoint.put(path, params, {cancelToken});
    }

    untagCard(request: UntagCardRequest, cancelToken?: CancelToken): Response<string | null> {
        const path = `/channels/${request.channel_id}/cards/${request.card_id}/tags/${request.tag_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }
}

const client = new Client(endpoint);

export default client;
