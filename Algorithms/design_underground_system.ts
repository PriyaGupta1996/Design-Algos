type CommuteDetails= {
        source: string;
        destination: string | null;
        checkin: number;
        checkout: number | null;
    };

type RouteDetails ={
        [id: number]: number;
        avgTime?: number | null;
    };

class UndergroundSystem {
    commuterMap: Map<number, CommuteDetails>;
    stationsMap: Map<string,RouteDetails>;

    constructor() {
        this.commuterMap = new Map<number,CommuteDetails>();
        this.stationsMap = new Map<string,RouteDetails>();
    }

    checkIn(id: number, stationName: string, t: number): void {
        let commuteDetails : CommuteDetails = {
            "source" :stationName,
            "destination" : null,
            "checkin" : t,
            "checkout" : null,
        }
        this.commuterMap.set(id,commuteDetails);
    }

    checkOut(id: number, stationName: string, t: number): void {
        if(this.commuterMap.has(id)){
            const {source,checkin} = this.commuterMap.get(id);
            const route = `${source}_${stationName}`
            let commuteTime :RouteDetails={};
            commuteTime[id]= t-checkin;
            let totalTime = t-checkin;
            let avgTime = t-checkin;
            let commuterCount =1;
            let existingMap={};
            if(this.stationsMap.has(route)){
                existingMap = this.stationsMap.get(route);
                for (const [id, commuteTime] of Object.entries(this.stationsMap.get(route)!)){
                    if(id!=="avgTime"){
                        commuterCount+=1;
                        totalTime +=commuteTime;
                    }
                }
            }
            existingMap[id]=t-checkin;;
            avgTime = totalTime/commuterCount;
            existingMap["avgTime"]= avgTime;
            this.stationsMap.set(route,existingMap);
            this.commuterMap.delete(id);
        }
    }

    getAverageTime(startStation: string, endStation: string): number {
        const route = `${startStation}_${endStation}`;
        if(this.stationsMap.has(route)){
            return this.stationsMap.get(route)["avgTime"];
        }
        return 0;
    }   
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */