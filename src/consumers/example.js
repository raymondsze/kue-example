const CONCURRENT_JOBS = 20;

export default (queue) => {
  queue.process('example', CONCURRENT_JOBS, (job, done) => {
    if (job.data.name) return done(null, `Hello! ${job.data.name}.`);
    return done(new Error('job.data.name cannot be null.'));
  });
};
