export { HttpClient }

class HttpClient {
    
    static fetchRest(ajaxUrl: string, method: string, contentType: string, action: string, vars: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(ajaxUrl, {
                    method,
                    cache: 'no-cache',
                    redirect: 'follow',
                    referrerPolicy: 'no-referrer',
                    headers: {
                        'Content-Type': contentType
                    },
                    body: (contentType === 'application/json') ? JSON.stringify({
                        action,
                        vars
                    }) : new URLSearchParams({ action, vars })
                });
                const data = await response.json();
                resolve(data);
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    }

}