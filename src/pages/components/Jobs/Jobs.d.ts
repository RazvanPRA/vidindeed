export interface JobsProps {
    statusJobs: {
        jobId: string,
        created: string,
        typeZone: string,
        address: string,
        service: string,
        distribuitorID: string,
        boEmail:string
        photographerEmail: string
        source: string
        intructions: string
        length: string
        orderClips: string
        job:string
        sinn: string
        status: string
        workerList: { id: string,  firstName: string,    lastName: string }[],
      }[],
}