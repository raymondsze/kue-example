export default (queue) => {
  const job = queue.create('example', {
    name: 'Raymond Sze',
  })
  .priority('high')
  .backoff({ type: 'exponential' })
  .attempts(5)
  .save();
  job.on('complete', (result) => {
    console.log('Job completed with data ', result);
  }).on('failed attempt', (errorMessage, doneAttempts) => {
    console.log('Job failed');
  }).on('failed', (errorMessage) => {
    console.log('Job failed');
  }).on('progress', (progress, data) => {
    console.log('\r  job #' + job.id + ' ' + progress + '% complete with data ', data );
  });
};
