export * from "./types";
export { Presence } from "./socket";
export { default as socket } from "./socket";
export { default as endpoint, Endpoint, Response, CancelToken, CancelTokenSource } from "./endpoint";
import { io } from "./types";
import endpoint, { Endpoint, Response, CancelToken, CancelTokenSource } from "./endpoint";

export type UpdatePreferencesRequest = Partial<io.Preferences>;

export interface FetchSpacesRequest {
    archived?: boolean;
}

export interface CompleteTaskRequest {
    task_id: string;
    board_id: string;
}

export interface MarkCardAsDoneRequest {
    card_id: string;
    board_id: string;
}

export interface MarkCardAsUndoneRequest {
    card_id: string;
    board_id: string;
}

export interface UncompleteTaskRequest {
    task_id: string;
    board_id: string;
}

export interface GetWorkspaceRequest {}

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

export interface CreateRoleRequest {
    space_id: string;
    name: string;
}

export interface FetchSpaceTopicsRequest {
    space_id: string;
}

export interface CreateTopicRequest {
    space_id: string;
    topic: string;
}

export interface UpdateTopicRequest {
    space_id: string;
    thread_id: string;
    is_active?: boolean;
    is_default?: boolean;
    topic?: string;
}

export interface DeleteTopicRequest {
    thread_id: string;
}

export interface FetchMessagesRequest {
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
    board_id: string;
}

export interface JoinSpaceRequest {
    space_id: string;
}

export interface ReactMessageRequest {
    thread_id: string;
    message_id: string;
    name: string;
}

export interface UnreactMessageRequest {
    thread_id: string;
    message_id: string;
    name: string;
}

export interface LabelCardRequest {
    label_id: string;
    card_id: string;
    board_id: string;
}

export interface UnlabelCardRequest {
    label_id: string;
    card_id: string;
    board_id: string;
}

export interface DeleteCardRequest {
    card_id: string;
    board_id: string;
}

export interface CreateCardRequest {
    name: string;
    column_id: string;
    board_id: string;
    description: string;
}

export interface FetchCardsRequest {
    board_id: string;
    column_id?: string;
}

export interface ArchiveCardRequest {
    card_id: string;
    board_id: string;
}

export interface UnarchiveCardRequest {
    card_id: string;
    column_id: string;
    board_id: string;
}

export interface UpdateCardRequest {
    name?: string;
    deadline?: string | null;
    description?: string | null;
    card_id: string;
    board_id: string;
}

export interface UpdateCardStatusRequest {
    done: boolean;
    card_id: string;
    board_id: string;
}

export interface CreateTaskRequest {
    board_id: string;
    name: string;
    checklist_id: string;
}

export interface ArchiveColumnRequest {
    board_id: string;
    column_id: string;
}

export interface UpdateTaskRequest {
    name?: string;
    task_id: string;
    board_id: string;
}

export interface DeleteTaskRequest {
    task_id: string;
    board_id: string;
}

export interface CreateChecklistRequest {
    board_id: string;
    card_id: string;
    name: string;
    member_id: string;
}

export interface ReassignChecklistRequest {
    user_id: string;
    board_id: string;
    checklist_id: string;
}

export interface UpdateChecklistRequest {
    board_id: string;
    checklist_id: string;
    name?: string;
}

export interface DeleteChecklistRequest {
    board_id: string;
    checklist_id: string;
}

export interface CreateColumnRequest {
    name: string;
    type: "stack" | "queue";
    origin: boolean;
    capacity: number;
    board_id: string;
}

export interface UpdateColumnRequest {
    name?: string;
    type?: "stack" | "queue";
    origin?: boolean;
    capacity?: number;
    column_id: string;
    board_id?: string;
}

export interface MoveColumnRequest {
    position: number;
    column_id: string;
    board_id: string;
}

export interface DeleteColumnRequest {
    column_id: string;
    board_id: string;
}

export interface FetchColumnsRequest {
    board_id: string;
}

export interface CreateBoardSpaceRequest {
    name: string;
    topics: any,
    purpose?: string;
    board: any,
    access: "private" | "public";
}

export interface CreateDiscussSpaceRequest {
    name: string;
    topics: any,
    purpose?: string;
    access: "private" | "public";
}

export interface UpdateSpaceRequest {
    name?: string;
    icon?: File;
    purpose?: string;
    space_id: string;
    access?: "private" | "public";
}

export interface CreateMemberRequest {
    space_id: string;
    user_id: string;
}

export interface PostMessageRequest {
    content: string;
    attachemnt?: File;
    embeds: any;
    markdown?: boolean;
    thread_id: string;
}

export interface DeleteMessageRequest {
    thread_id: string;
    message_id: string;
}

export interface PinMessageRequest {
    thread_id: string;
    message_id: string;
}

export interface UnpinMessageRequest {
    thread_id: string;
    message_id: string;
}

export interface FlagMessageRequest {
    thread_id: string;
    message_id: string;
}

export interface SendInvitationRequest {
    email: string;
    message: string;
    space_id: string;
}

export interface UpdateSpacePermissionsRequest
    extends Partial<Omit<io.Permissions, "id">> {
    role_id: string;
    space_id: string;
}

export interface UnflagMessageRequest {
    thread_id: string;
    message_id: string;
}

export interface ArchiveSpaceRequest {
    space_id: string;
}

export interface UnarchiveSpaceRequest {
    space_id: string;
}

export interface DestroySpaceRequest {
    space_id: string;
}

export interface DestroyWorkspaceRequest {}

export interface DeleteMemberRequest {
    member_id: string;
    space_id: string;
}

export interface GetSpacePermissionsRequest {
    role_id: string;
    space_id: string;
}

export interface FetchSpaceMembersRequest {
    space_id: string;
}

export interface FetchArchivedColumnsRequest {
    board_id: string;
}

export interface FetchArchivedCardsRequest {
    board_id: string;
}

export interface DeleteSpaceRoleRequest {
    role_id: string;
    space_id: string;
}

export interface UpdateMessageRequest {
    message_id: string;
    thread_id: string;
    content: string;
    markdown?: boolean;
}

export interface LoadThreadRequest {
    thread_id: string;
}

export interface GetSpaceRequest {
    space_id: string;
}

export interface SendInvitationsRequest {
    space_id: string;
    emails: string[];
}

export interface FetchSpaceInvitations {
    space_id: string;
}

export interface DeleteInvitationRequest {
    space_id: string;
    invitation_id: string;
}

export interface CreateLabelRequest{
    board_id: string;
    name: string;
    color: string;
}

export interface DeleteLabelRequest{
    board_id: string;
    label_id: string;
}

export interface UpdateLabelRequest{
    board_id: string;
    label_id: string;
    name: string;
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

    fetchTemplates(cancelToken?: CancelToken): Response<(io.BoardTemplate|io.DiscussSpace)[]>{
        return this.endpoint.get(`/templates`, {cancelToken});
    }

    getWorkspace(cancelToken?: CancelToken): Response<io.Workspace> {
        return this.endpoint.get(`/workspace`, {cancelToken});
    }

    fetchSpaces(request: FetchSpacesRequest, cancelToken?: CancelToken): Response<io.Space[]> {
        return this.endpoint.get(`/spaces`, {cancelToken, params: request });
    }

    fetchSpaceInvitations(
        request: FetchSpaceInvitations
    , cancelToken?: CancelToken): Response<io.Invitation[]> {
        return this.endpoint.get(`/spaces/${request.space_id}/invitations`, {cancelToken});
    }

    deleteInvitation(request: DeleteInvitationRequest, cancelToken?: CancelToken): Response<any> {
        return this.endpoint.delete(
            `/spaces/${request.space_id}/invitations/${request.invitation_id}`
        , {cancelToken});
    }

    sendInvitations(
        request: SendInvitationsRequest
    , cancelToken?: CancelToken): Response<io.Invitation[]> {
        return this.endpoint.post(
            `/spaces/${request.space_id}/invitations`,
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

    getAuth(cancelToken?: CancelToken): Response<io.Auth> {
        return this.endpoint.get("/auth", {cancelToken});
    }

    login(params: LoginRequest): Response<io.Auth> {
        return this.endpoint.post("/auth/login", params);
    }

    logout(): Response<any> {
        return this.endpoint.post("/auth/logout")
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

    fetchSpaceTopics(
        request: FetchSpaceTopicsRequest
    , cancelToken?: CancelToken): Response<io.Thread[]> {
        const path = `/spaces/${request.space_id}/topics`;
        return this.endpoint.get(path, {cancelToken});
    }

    fetchMessages(request: FetchMessagesRequest, cancelToken?: CancelToken): Response<io.Message[]> {
        const { thread_id, params } = request;
        const path = `/threads/${thread_id}/messages`;
        return this.endpoint.get(path, { params, cancelToken });
    }

    fetchArchivedSpaces(cancelToken?: CancelToken): Response<io.Space[]> {
        const path = `/archived`;
        return this.endpoint.get(path, {cancelToken});
    }

    fetchPublicSpaces(cancelToken?: CancelToken): Response<io.Space[]> {
        const path = `/joinable`;
        return this.endpoint.get(path, {cancelToken});
    }

    createTopic(request: CreateTopicRequest, cancelToken?: CancelToken): Response<io.Thread> {
        const path = `/spaces/${request.space_id}/topics`;
        const params = {
            topic: request.topic,
        };
        return this.endpoint.post(path, params, {cancelToken});
    }

    updateTopic(request: UpdateTopicRequest, cancelToken?: CancelToken): Response<io.Thread> {
        const path = `/topics/${request.thread_id}`;
        const params = {
            is_active: request.is_active,
            is_default: request.is_default,
            topic: request.topic,
        };
        return this.endpoint.patch(path, params, {cancelToken});
    }

    deleteTopic(request: DeleteTopicRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/topics/${request.thread_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    getSpace(request: GetSpaceRequest, cancelToken?: CancelToken): Response<io.Space> {
        const path = `/spaces/${request.space_id}`;
        return this.endpoint.get(path, {cancelToken});
    }

    archiveSpace(request: ArchiveSpaceRequest, cancelToken?: CancelToken): Response<io.Space> {
        const path = `/spaces/${request.space_id}/archive`;
        return this.endpoint.put(path, {cancelToken});
    }

    unarchiveSpace(request: UnarchiveSpaceRequest, cancelToken?: CancelToken): Response<io.Space> {
        const path = `/spaces/${request.space_id}/unarchive`;
        return this.endpoint.put(path, {cancelToken});
    }

    reactMessage(request: ReactMessageRequest, cancelToken?: CancelToken): Response<io.Message> {
        const path = `/threads/${request.thread_id}/messages/${request.message_id}/react/${request.name}`;
        return this.endpoint.post(path, {cancelToken});
    }

    unreactMessage(request: UnreactMessageRequest, cancelToken?: CancelToken): Response<io.Message> {
        const path = `/threads/${request.thread_id}/messages/${request.message_id}/react/${request.name}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    createSpace(request: CreateBoardSpaceRequest, cancelToken?: CancelToken): Response<io.Space> {
        const path = `/spaces`;
        return this.endpoint.post(path, request, {cancelToken});
    }

    loadThread(request: LoadThreadRequest, cancelToken?: CancelToken): Response<io.Thread> {
        const path = `/threads/${request.thread_id}`;
        return this.endpoint.get(path, {cancelToken});
    }

    joinSpace(request: JoinSpaceRequest, cancelToken?: CancelToken): Response<io.Space> {
        const path = `/spaces/${request.space_id}/join`;
        return this.endpoint.post(path, {cancelToken});
    }

    updateSpace(request: UpdateSpaceRequest, cancelToken?: CancelToken): Response<io.Space> {
        const { space_id, ...params } = request;
        const path = `/spaces/${space_id}`;
        return this.endpoint.patch(path, params, {cancelToken});
    }

    destroy(request: DestroySpaceRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/spaces/${request.space_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    postMessage(request: PostMessageRequest, cancelToken?: CancelToken): Response<io.Message> {
        const path = `/threads/${request.thread_id}/messages`;
        const params = new FormData();
        params.append("text", request.content);
        if (request.attachemnt) {
            params.append("file", request.attachemnt);
        }

        if (request.markdown == true || request.markdown == false) {
            params.append("markdown", request.markdown ? "1" : "0");
        }
        return this.endpoint.post(path, params, {cancelToken});
    }

    fetchRoles(cancelToken?: CancelToken): Response<io.Role[]> {
        const path = `/roles`;
        return this.endpoint.get(path, {cancelToken});
    }

    fetchSpaceMembers(
        request: FetchSpaceMembersRequest
    , cancelToken?: CancelToken): Response<io.Member[]> {
        const path = `/spaces/${request.space_id}/members`;
        return this.endpoint.get(path, {cancelToken});
    }

    pinMessage(request: PinMessageRequest, cancelToken?: CancelToken): Response<io.Message> {
        const path = `/threads/${request.thread_id}/messages/${request.message_id}/pin`;
        return this.endpoint.put(path, {cancelToken});
    }

    unpinMessage(request: UnpinMessageRequest, cancelToken?: CancelToken): Response<io.Message> {
        const path = `/threads/${request.thread_id}/messages/${request.message_id}/pin`;
        return this.endpoint.delete(path, {cancelToken});
    }

    flagMessage(request: FlagMessageRequest, cancelToken?: CancelToken): Response<io.Message> {
        const path = `/threads/${request.thread_id}/messages/${request.message_id}/flag`;
        return this.endpoint.put(path, {cancelToken});
    }

    unflagMessage(request: UnflagMessageRequest, cancelToken?: CancelToken): Response<io.Message> {
        const path = `/threads/${request.thread_id}/messages/${request.message_id}/flag`;
        return this.endpoint.delete(path, {cancelToken});
    }

    createSpaceMember(request: CreateMemberRequest, cancelToken?: CancelToken): Response<io.Member> {
        const path = `/spaces/${request.space_id}/users/${request.user_id}`;
        return this.endpoint.post(path, {}, {cancelToken});
    }

    deleteSpaceMember(request: DeleteMemberRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/spaces/${request.space_id}/members/${request.member_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    deleteMessage(request: DeleteMessageRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/threads/${request.thread_id}/messages/${request.message_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    updateMessage(request: UpdateMessageRequest, cancelToken?: CancelToken): Response<io.Message> {
        const path = `/threads/${request.thread_id}/messages/${request.message_id}`;
        const params = {
            content: request.content,
            markdown: request.markdown,
        };
        return this.endpoint.patch(path, params, {cancelToken});
    }

    fetchArchivedCards(
        request: FetchArchivedCardsRequest
    , cancelToken?: CancelToken): Response<io.Card[]> {
        const path = `/boards/${request.board_id}/cards?archived`;
        return this.endpoint.get(path, {cancelToken});
    }

    fetchArchivedColumns(
        request: FetchArchivedColumnsRequest
    , cancelToken?: CancelToken): Response<io.Column[]> {
        const path = `/boards/${request.board_id}/columns?archived`;
        return this.endpoint.get(path, {cancelToken});
    }

    getSpacePermissions(
        request: GetSpacePermissionsRequest
    , cancelToken?: CancelToken): Response<io.Permissions> {
        const path = `/spaces/${request.space_id}/roles/${request.role_id}/permissions`;
        return this.endpoint.get(path, {cancelToken});
    }

    deleteRole(params: DeleteSpaceRoleRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/spaces/${params.space_id}/roles/${params.role_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    updatePermissions({
        space_id,
        role_id,
        ...params
    }: UpdateSpacePermissionsRequest, cancelToken?: CancelToken): Response<io.Permissions> {
        const path = `/spaces/${space_id}/roles/${role_id}/permissions`;
        return this.endpoint.patch(path, params, {cancelToken});
    }

    fetchColumns(request: FetchColumnsRequest, cancelToken?: CancelToken): Response<io.Column[]> {
        const path = `/boards/${request.board_id}/columns`;
        return this.endpoint.get(path, {cancelToken});
    }

    createColumn(request: CreateColumnRequest, cancelToken?: CancelToken): Response<io.Column> {
        const path = `/boards/${request.board_id}/columns`;
        const params = {
            name: request.name,
            type: request.type,
            origin: request.origin,
            capacity: request.capacity,
        };
        return this.endpoint.post(path, params, {cancelToken});
    }

    archiveColumn(request: ArchiveColumnRequest, cancelToken?: CancelToken): Response<io.Column> {
        const path = `/boards/${request.board_id}/columns/${request.column_id}/archive`;
        return this.endpoint.post(path, {cancelToken});
    }

    unarchiveColumn(request: ArchiveColumnRequest, cancelToken?: CancelToken): Response<io.Column> {
        const path = `/boards/${request.board_id}/columns/${request.column_id}/unarchive`;
        return this.endpoint.post(path, {cancelToken});
    }

    updateColumn(request: UpdateColumnRequest, cancelToken?: CancelToken): Response<io.Column> {
        const path = `/boards/${request.board_id}/columns/${request.column_id}`;
        const params = {
            name: request.name,
            type: request.type,
            origin: request.origin,
            capacity: request.capacity,
        };
        return this.endpoint.patch(path, params, {cancelToken});
    }

    moveColumn(request: MoveColumnRequest, cancelToken?: CancelToken): Response<io.Column> {
        const path = `/boards/${request.board_id}/columns/${request.column_id}/move`;
        const params = {
            position: request.position,
        };
        return this.endpoint.put(path, params, {cancelToken});
    }

    deleteColumn(request: DeleteColumnRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/boards/${request.board_id}/columns/${request.column_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    createChecklist(request: CreateChecklistRequest, cancelToken?: CancelToken): Response<io.Checklist> {
        const path = `/boards/${request.board_id}/cards/${request.card_id}/checklists`;
        const params = {
            name: request.name,
            member_id: request.member_id,
        };
        return this.endpoint.post(path, params, {cancelToken});
    }

    updateChecklist(request: UpdateChecklistRequest, cancelToken?: CancelToken): Response<io.Checklist> {
        const path = `/boards/${request.board_id}/checklists/${request.checklist_id}`;
        const params = {
            name: request.name,
        };
        return this.endpoint.patch(path, params, {cancelToken});
    }

    reassignChecklist(request: ReassignChecklistRequest, cancelToken?: CancelToken): Response<io.Checklist> {
        const path = `/boards/${request.board_id}/checklists/${request.checklist_id}/user/${request.user_id}`;
        return this.endpoint.put(path, {}, {cancelToken});
    }


    deleteChecklist(request: DeleteChecklistRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/boards/${request.board_id}/checklists/${request.checklist_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    createTask(request: CreateTaskRequest, cancelToken?: CancelToken): Response<io.Task> {
        const path = `/boards/${request.board_id}/checklists/${request.checklist_id}/tasks`;
        const params = { name: request.name };
        return this.endpoint.post(path, params, {cancelToken});
    }

    updateTask(request: UpdateTaskRequest, cancelToken?: CancelToken): Response<io.Task> {
        const path = `/boards/${request.board_id}/tasks/${request.task_id}`;
        const params = { name: request.name };
        return this.endpoint.patch(path, params, {cancelToken});
    }

    completeTask(request: CompleteTaskRequest, cancelToken?: CancelToken): Response<io.Task> {
        const path = `/boards/${request.board_id}/tasks/${request.task_id}/complete`;
        return this.endpoint.put(path, {cancelToken});
    }

    uncompleteTask(request: UncompleteTaskRequest, cancelToken?: CancelToken): Response<io.Task> {
        const path = `/boards/${request.board_id}/tasks/${request.task_id}/uncomplete`;
        return this.endpoint.put(path, {cancelToken});
    }

    deleteTask(request: DeleteTaskRequest, cancelToken?: CancelToken): Response<any> {
        const path = `/boards/${request.board_id}/tasks/${request.task_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    fetchCards(request: FetchCardsRequest, cancelToken?: CancelToken): Response<io.Card[]> {
        let url: string;
        if (request.column_id != null) {
            url = `/boards/${request.board_id}/columns/${request.column_id}/cards`;
        } else {
            url = `/boards/${request.board_id}/cards`;
        }
        return this.endpoint.get(url, {cancelToken});
    }

    createCard(payload: CreateCardRequest, cancelToken?: CancelToken): Response<io.Card> {
        const params = {
            name: payload.name,
            description: payload.description,
        };
        const url = `/boards/${payload.board_id}/columns/${payload.column_id}/cards`;
        return this.endpoint.post(url, params, {cancelToken});
    }

    deleteCard(request: DeleteCardRequest, cancelToken?: CancelToken): Response<Partial<io.Card>> {
        const url = `/boards/${request.board_id}/cards/${request.card_id}`;
        return this.endpoint.delete(url, {cancelToken});
    }

    archiveCard(request: ArchiveCardRequest, cancelToken?: CancelToken): Response<io.Card> {
        const url = `/boards/${request.board_id}/cards/${request.card_id}/archive`;
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
        const path = `/boards/${request.board_id}/cards/${request.card_id}/move`;
        return this.endpoint.put(path, params, {cancelToken});
    }

    markCardAsDone(request: MarkCardAsDoneRequest, cancelToken?: CancelToken): Response<io.Card> {
        const path = `/boards/${request.board_id}/cards/${request.card_id}/done`;
        return this.endpoint.put(path, {cancelToken});
    }

    markCardAsUndone(request: MarkCardAsUndoneRequest, cancelToken?: CancelToken): Response<io.Card> {
        const path = `/boards/${request.board_id}/cards/${request.card_id}/undone`;
        return this.endpoint.put(path, {cancelToken});
    }

    updateCard(request: UpdateCardRequest, cancelToken?: CancelToken): Response<io.Card> {
        const path = `/boards/${request.board_id}/cards/${request.card_id}`;
        const params = {
            name: request.name,
            deadline: request.deadline,
            description: request.description,
        };
        return this.endpoint.patch(path, params, {cancelToken});
    }

    createLabel(request: CreateLabelRequest, cancelToken?: CancelToken): Response<io.Label>{
        const path = `/boards/${request.board_id}/labels`;
        const params = {
            name: request.name,
        };
        return this.endpoint.post(path, params, {cancelToken});
    }

    updateLabel(request: UpdateLabelRequest, cancelToken?: CancelToken): Response<io.Label>{
        const path = `/boards/${request.board_id}/labels/${request.label_id}`;
        const params = {
            name: request.name,
        };
        return this.endpoint.post(path, params, {cancelToken});
    }

    deleteLabel(request: DeleteLabelRequest, cancelToken?: CancelToken): Response<io.Label>{
        const path = `/boards/${request.board_id}/labels/${request.label_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }

    labelCard(request: LabelCardRequest, cancelToken?: CancelToken): Response<io.CardLabel> {
        const path = `/boards/${request.board_id}/cards/${request.card_id}/lebels/${request.label_id}`;
        return this.endpoint.put(path, {}, {cancelToken});
    }

    unlabelCard(request: UnlabelCardRequest, cancelToken?: CancelToken): Response<string | null> {
        const path = `/boards/${request.board_id}/cards/${request.card_id}/leabels/${request.label_id}`;
        return this.endpoint.delete(path, {cancelToken});
    }
}

const client = new Client(endpoint);

export default client;
