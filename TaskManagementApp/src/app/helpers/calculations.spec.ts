import { expect } from 'chai';
import Calculations from './calculations'; 


describe('Calculations', () => {

    // Test case: Calculate percentage standard deviation of a one-dimensional array
    it('should calculate the percentage standard deviation of a one-dimensional array', () => {
        const data = [10, 12, 23, 23, 16, 23, 21, 16]; 
        const result = Calculations.calculatePercentageStandardDeviationOfOneDimensionalArray(data); 
        const expected = 28.114; 
        expect(result).to.be.closeTo(expected, 0.01); 
    });

    // Test case: Calculate percentage standard deviation of a two-dimensional array
    it('should calculate the percentage standard deviation of a two-dimensional array', () => {
        const data = [
            [10, 12, 23],
            [23, 16, 23],
            [21, 16, 15]
        ]; 
        const result = Calculations.calculatePercentageStandardDeviationOfTwoDimensionalArray(data); 
        const expected = 18.92; 
        expect(result).to.be.closeTo(expected, 0.01); 
    });

    // Test case: Calculate the zero crossing percentage of an array
    it('should calculate the zero crossing percentage of an array', () => {
        const data = [1, -1, 2, -2, 3, -3]; 
        const result = Calculations.zeroCrossingPercentage(data); 
        const expected = 83.33; 
        expect(result).to.be.closeTo(expected, 0.01); 
    });

    // Test case: Calculate the average of a two-dimensional array
    it('should calculate the average of a two-dimensional array', () => {
        const data = [
            [10, 20, 30],
            [40, 50, 60]
        ]; 
        const result = Calculations.calculateAverageOfTwoDimensionalArray(data); 
        const expected = 35; 
        expect(result).to.equal(expected);
    });

    // Test case: Get the most frequent value at each subarray
    it('should get the most frequent value at each subarray', () => {
        const data = [
            [1, 2, 2, 3],
            [4, 4, 5, 6],
            [7, 8, 8, 8]
        ]; 
        const result = Calculations.getMostFrequentValueAtEachSubarray(data); 
        const expected = [2, 4, 8]; 
        expect(result).to.deep.equal(expected); 
    });

    // Test case: Get the average value of the highest percentage of each subarray
    it('should get the average value of the highest percentage of each subarray', () => {
        const data = [
            [10, 20, 30],
            [40, 50, 60]
        ]; 
        const percentage = 50; 
        const result = Calculations.getAvreageValueOfHighestPercentageOfEachSubarray(data, percentage); // Call the method
        const expected = [25, 55]; 
        expect(result).to.deep.equal(expected); 
    });

    // Test case: Get the average value of each subarray after removing outliers
    it('should get the average value of each subarray after removing outliers', () => {
        const data = [
            [1, 2, 100, 2, 3],
            [4, 5, 6, 200]
        ]; 
        const result = Calculations.getAverageValueOfEachSubarryAfterRemoveingOutliers(data); 
        const expected = [2, 5]; 
        expect(result).to.deep.equal(expected); 
    });

    // Test case: Get the average value of each subarray after trimming percentage highest and lowest values
    it('should get the average value of each subarray after trimming percentage highest and lowest values', () => {
        const data = [
            [10, 20, 30, 40],
            [50, 60, 70, 80]
        ]; 
        const trimPercentage = 25; 
        const result = Calculations.getAverageValueOfEachSubarryAfterTrimmingPercentageHighestAndLowestValues(data, trimPercentage); // Call the method
        const expected = [25, 65]; 
        expect(result).to.deep.equal(expected); 
    });

});
