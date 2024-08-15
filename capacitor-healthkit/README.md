# capacitor-healthkit

Capacitor Apple Healthkit Integration

## Install

```bash
npm install capacitor-healthkit
npx cap sync
```

## API

<docgen-index>

* [`requestAuthorization(...)`](#requestauthorization)
* [`isAvailable()`](#isavailable)
* [`getAuthorizationStatus(...)`](#getauthorizationstatus)
* [`getBodyMassEntries(...)`](#getbodymassentries)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### requestAuthorization(...)

```typescript
requestAuthorization(options: RequestAuthorizationOptions) => Promise<void>
```

| Param         | Type                                                                                |
| ------------- | ----------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#requestauthorizationoptions">RequestAuthorizationOptions</a></code> |

--------------------


### isAvailable()

```typescript
isAvailable() => Promise<void>
```

--------------------


### getAuthorizationStatus(...)

```typescript
getAuthorizationStatus(options: GetAuthorizationStatusOptions) => Promise<{ status: AuthorizationStatus; }>
```

| Param         | Type                                                                                    |
| ------------- | --------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#getauthorizationstatusoptions">GetAuthorizationStatusOptions</a></code> |

**Returns:** <code>Promise&lt;{ status: <a href="#authorizationstatus">AuthorizationStatus</a>; }&gt;</code>

--------------------


### getBodyMassEntries(...)

```typescript
getBodyMassEntries(options: BodyMassQueryOptions) => Promise<BodyMassQueryOutput>
```

| Param         | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| **`options`** | <code><a href="#bodymassqueryoptions">BodyMassQueryOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#bodymassqueryoutput">BodyMassQueryOutput</a>&gt;</code>

--------------------


### Interfaces


#### RequestAuthorizationOptions

| Prop        | Type                  |
| ----------- | --------------------- |
| **`all`**   | <code>string[]</code> |
| **`read`**  | <code>string[]</code> |
| **`write`** | <code>string[]</code> |


#### GetAuthorizationStatusOptions

| Prop             | Type                |
| ---------------- | ------------------- |
| **`sampleType`** | <code>string</code> |


#### BodyMassQueryOutput

| Prop       | Type                                                                                                                    |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| **`data`** | <code>{ date: string; value: number; unit: string; uuid: string; sourceName: string; sourceBundleId: string; }[]</code> |


#### BodyMassQueryOptions

| Prop            | Type                |
| --------------- | ------------------- |
| **`startDate`** | <code>string</code> |
| **`endDate`**   | <code>string</code> |
| **`limit`**     | <code>number</code> |


### Type Aliases


#### AuthorizationStatus

<code>'notDetermined' | 'sharingDenied' | 'sharingAuthorized'</code>

</docgen-api>
