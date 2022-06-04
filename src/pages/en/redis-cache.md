---
titie: Redis Cache
layout: ../../layouts/main-layout.astro
---

Resource Name: Hancock
[Azure Redis Cache Documentation](https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/)

Session state is maintained using the Azure Redis Cache.
A custom provider is set up in the Web.Config of Exemplar.


```
<sessionState mode="Custom" customProvider="HancockSessionStateStore">
        <providers>
          <add name="HancockSessionStateStore" type="Microsoft.Web.Redis.RedisSessionStateProvider" 
               host="hancock.redis.cache.windows.net" 
               accessKey="<Access Key>" ssl="true" throwOnError="false" 
               connectionTimeoutInMilliseconds="10000" operationTimeoutInMilliseconds="5000" />
        </providers>
</sessionState>
```


