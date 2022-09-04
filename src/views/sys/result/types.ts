export interface ResultPageStatus {
    status: '403' | '404' | '500'
    title: string
    subtitle: string
    extra: React.ReactNode
}
