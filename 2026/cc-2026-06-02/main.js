/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    const usedEnergy = energy.reduce((acc, c) => acc + c, 0);
    const energyTrainingHours = Math.max(0, usedEnergy - initialEnergy + 1);
    let currentExperience = initialExperience;
    let experienceTrainingHours = 0;
    for(const num of experience){
        if(currentExperience <= num){
            const diff = num - currentExperience + 1;
            experienceTrainingHours += diff;
            currentExperience += diff;
        }
        currentExperience += num;
    }
    return experienceTrainingHours + energyTrainingHours;
};