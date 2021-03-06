class MvsManager {
    private static _instance: MvsManager;
    public static engine: MatchvsEngine = new MatchvsEngine();
    public static response: MatchvsResponse = new MatchvsResponse();


    public static getInstance(): MvsManager {
        if (MvsManager._instance == null) {
            MvsManager._instance = new MvsManager();
            //  MatchvsLog.closeLog();
        }
        return MvsManager._instance;
    }

    public init(): any {
        return MvsManager.engine.init(MvsManager.response, Const.channel, Const.platform, Const.gameId,
            Const.appKey,  Const.gameVersion);
    }

    public uninit(): any {
        return MvsManager.engine.uninit();
    }

    public registerUser(): any {
        return MvsManager.engine.registerUser();
    }

    public login(): any {
        return MvsManager.engine.login(GameData.userId, GameData.token, Const.deviceId,0)
    }

    public logout(cpProto): any {
        return MvsManager.engine.logout(cpProto);
    }

    public joinRandomRoom(maxPlayer: number, userProfile: string) {
        return MvsManager.engine.joinRandomRoom(maxPlayer, userProfile);
    }

    public joinRoom(roomId: string, userProfile: string) {
        return MvsManager.engine.joinRoom(roomId, userProfile);
    }
    public joinLiveRoom(roomId: string, userProfile: string) {
        return MvsManager.engine.joinWatchRoom(roomId, userProfile);
    }
    public setLiveOffSet(offset:number) {
        return MvsManager.engine.setLiveOffset(offset);
    }

    public joinOver(cpProto: string) {
        return MvsManager.engine.joinOver(cpProto);
    }

    public createRoom(createRoom, userProfile,watch) {
        return MvsManager.engine.createRoom(createRoom, userProfile,watch);
    }
    public joinRoomWithProperties(matchinfo:MsMatchInfo, userProfile:string) {
        return MvsManager.engine.joinRoomWithProperties(matchinfo, userProfile);
    }

    public leaveRoom(cpProto: string): number {
        return MvsManager.engine.leaveRoom(cpProto)
    }
    public leaveWatchRoom(cpProto: string): number {
        return MvsManager.engine.leaveWatchRoom(cpProto)
    }

    public setFrameSync(rate: number) {
        return MvsManager.engine.setFrameSync(rate);
    }

    public sendFrameEvent(cpProto: string) {
        return MvsManager.engine.sendFrameEvent(cpProto);
    }

    public sendEvent(cpProto: string) {
        return MvsManager.engine.sendEvent(cpProto);
    }

    public kickPlayer(srcUserid, cpProto) {
        return MvsManager.engine.kickPlayer(srcUserid, cpProto);
    }

    public getRoomList(filter) {
        return MvsManager.engine.getRoomListEx(filter);
    }
}