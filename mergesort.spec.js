describe('Merge Sort', function() {
  it('handles an empty array - merge sort', function() {
    expect(mergeSort([])).toEqual([]);
  });

  it('handles array of one number - merge sort', function() {
    expect(mergeSort([-1])).toEqual([-1]);
  });

  it('handles array of same numbers - merge sort', function() {
    expect(mergeSort([0, 0, 0])).toEqual([0, 0, 0]);
  });

  it('returns array of already sorted numbers in same order - merge sort', function() {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([-7, 42, 100])).toEqual([-7, 42, 100]);
  });

  it('handles array of unsorted numbers - merge sort', function() {
    expect(mergeSort([100, 38, -100, -4, 7, 10])).toEqual([
      -100,
      -4,
      7,
      10,
      38,
      100,
    ]);
  });
});
