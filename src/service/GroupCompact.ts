import { Carry } from "@/model/carry";
import { Milk } from "@/model/milk";

export class GroupCompact {

    calMilkBuffRate(milk: Milk): number {
        const buffDamage = (milk.唱歌后三攻 + 3200) / 250 * (milk.力智总和 + 21000) / 100;
        const originalDamage = 3200 / 250 * 21000 / 100;
        return buffDamage / originalDamage;
    }

    calMilkBuffRateVice(milk: Milk): number {
        let buffDamage = (milk.唱歌后三攻 + 3200) / 250 * (milk.力智总和 + 21000) / 100;
        if (milk.职业 == "奶萝") {
            buffDamage = (milk.唱歌后三攻 * 0.85 + 3200) / 250 * (milk.力智总和 + 21000) / 100;
        }
        const originalDamage = 3200 / 250 * 21000 / 100;
        return buffDamage / originalDamage;
    }

    calCarryDamageInRaid(carryDamge: number, milkDim: Milk, hasAssistant: boolean, isVice: boolean): number {
        let buffRate = this.calMilkBuffRate(milkDim);
        if (milkDim.职业 == "奶萝" && isVice) {
            buffRate = this.calMilkBuffRateVice(milkDim);
        }
        if (hasAssistant) {
            buffRate = buffRate * 1.34;
        }
        return carryDamge * buffRate;
    }

    calTotalGroupDamage(carrys: Array<Carry>, milkDim: Milk) {
        return carrys.map((carry, index) => {
            const hasAssistant = carrys.filter(carryItor => carry != carryItor && carryItor.isAssistant).length > 0;
            return this.calCarryDamageInRaid(carry.damage, milkDim, hasAssistant, index != 0);
        }).reduce((accumulator, currentValue) => accumulator + currentValue);
    }
}