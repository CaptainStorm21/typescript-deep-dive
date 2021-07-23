// Flexible arrays can stil contain multipl edifferent types


const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-12');
importantDates.push(new Date());
//error
// importantDates.push(2020);

