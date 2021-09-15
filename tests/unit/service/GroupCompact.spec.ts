import { Carry } from "@/model/carry";
import { Milk } from "@/model/milk";
import { GroupCompact } from "@/service/GroupCompact";

describe('Test group compact service', () => {

    const carrys: Array<Carry> = [
        { damage: 20, isAssistant: false }, { damage: 15, isAssistant: false }, { damage: 10, isAssistant: true },
    ];

    const carrysHaveTwoThreeFour: Array<Carry> = [
        { damage: 20, isAssistant: false }, { damage: 15, isAssistant: true }, { damage: 10, isAssistant: true },
    ];

    const milkLoli: Milk = {
        "职业": "奶萝",
        "ID": "dummy1",
        "祝福": 20000,
        "一觉": 30000,
        "三觉": 10000,
        "其他": 1000,
        "三攻": 3000,
        "唱歌后三攻": 3800,
        "力智总和": 61000,
    };

    const milkYellowFace: Milk = {
        "职业": "奶妈",
        "ID": "dummy2",
        "祝福": 20000,
        "一觉": 30000,
        "三觉": 10000,
        "其他": 1000,
        "三攻": 3000,
        "唱歌后三攻": 3800,
        "力智总和": 61000,
    };

    const groupCompactService = new GroupCompact();

    it('should cal milk rate correct', () => {
        const rate = groupCompactService.calMilkBuffRate(milkLoli);

        expect(rate).toBeGreaterThan(5);
    })

    it('should cal carry damage in raid correct', () => {
        const simpleTotal = carrys.map(carry => carry.damage).reduce((acc, cur) =>acc + cur);
        const damageGroup1 = groupCompactService.calTotalGroupDamage(carrys, milkLoli);
        const damageGroup2 = groupCompactService.calTotalGroupDamage(carrysHaveTwoThreeFour, milkLoli);

        expect(damageGroup1).toBeGreaterThan(simpleTotal*3);
    })

    it('should have better damage with two threefour player', () => {
        const damageGroup1 = groupCompactService.calTotalGroupDamage(carrys, milkLoli);
        const damageGroup2 = groupCompactService.calTotalGroupDamage(carrysHaveTwoThreeFour, milkLoli);

        expect(damageGroup2).toBeGreaterThan(damageGroup1);
    })

    it('should have better damage if milk is yellow face', () => {
        const damageGroup1 = groupCompactService.calTotalGroupDamage(carrysHaveTwoThreeFour, milkLoli);
        const damageGroup2 = groupCompactService.calTotalGroupDamage(carrysHaveTwoThreeFour, milkYellowFace);

        expect(damageGroup2).toBeGreaterThan(damageGroup1);
    })
})