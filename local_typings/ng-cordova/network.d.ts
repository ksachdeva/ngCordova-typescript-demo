
declare module ngCordova {  

  export interface INetworkInformationService {

      getNetwork(): string;

      isOnline(): boolean;

      isOffline(): boolean;

      clearOfflineWatch(): void;

      clearOnlineWatch(): void;
  }

}
