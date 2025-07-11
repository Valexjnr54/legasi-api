
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model project_manager
 * 
 */
export type project_manager = $Result.DefaultSelection<Prisma.$project_managerPayload>
/**
 * Model project
 * 
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>
/**
 * Model data_entry
 * 
 */
export type data_entry = $Result.DefaultSelection<Prisma.$data_entryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  project_manager: 'project_manager',
  super_admin: 'super_admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  Available: 'Available',
  Pending: 'Pending',
  Completed: 'Completed',
  Rejected: 'Rejected',
  Approved: 'Approved',
  Inactive: 'Inactive',
  Active: 'Active',
  Suspend: 'Suspend'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project_manager`: Exposes CRUD operations for the **project_manager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Project_managers
    * const project_managers = await prisma.project_manager.findMany()
    * ```
    */
  get project_manager(): Prisma.project_managerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.projectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.data_entry`: Exposes CRUD operations for the **data_entry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Data_entries
    * const data_entries = await prisma.data_entry.findMany()
    * ```
    */
  get data_entry(): Prisma.data_entryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    admin: 'admin',
    project_manager: 'project_manager',
    project: 'project',
    data_entry: 'data_entry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "project_manager" | "project" | "data_entry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      project_manager: {
        payload: Prisma.$project_managerPayload<ExtArgs>
        fields: Prisma.project_managerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.project_managerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.project_managerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload>
          }
          findFirst: {
            args: Prisma.project_managerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.project_managerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload>
          }
          findMany: {
            args: Prisma.project_managerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload>[]
          }
          create: {
            args: Prisma.project_managerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload>
          }
          createMany: {
            args: Prisma.project_managerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.project_managerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload>
          }
          update: {
            args: Prisma.project_managerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload>
          }
          deleteMany: {
            args: Prisma.project_managerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.project_managerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.project_managerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$project_managerPayload>
          }
          aggregate: {
            args: Prisma.Project_managerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject_manager>
          }
          groupBy: {
            args: Prisma.project_managerGroupByArgs<ExtArgs>
            result: $Utils.Optional<Project_managerGroupByOutputType>[]
          }
          count: {
            args: Prisma.project_managerCountArgs<ExtArgs>
            result: $Utils.Optional<Project_managerCountAggregateOutputType> | number
          }
        }
      }
      project: {
        payload: Prisma.$projectPayload<ExtArgs>
        fields: Prisma.projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      data_entry: {
        payload: Prisma.$data_entryPayload<ExtArgs>
        fields: Prisma.data_entryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.data_entryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.data_entryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload>
          }
          findFirst: {
            args: Prisma.data_entryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.data_entryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload>
          }
          findMany: {
            args: Prisma.data_entryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload>[]
          }
          create: {
            args: Prisma.data_entryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload>
          }
          createMany: {
            args: Prisma.data_entryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.data_entryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload>
          }
          update: {
            args: Prisma.data_entryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload>
          }
          deleteMany: {
            args: Prisma.data_entryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.data_entryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.data_entryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$data_entryPayload>
          }
          aggregate: {
            args: Prisma.Data_entryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateData_entry>
          }
          groupBy: {
            args: Prisma.data_entryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Data_entryGroupByOutputType>[]
          }
          count: {
            args: Prisma.data_entryCountArgs<ExtArgs>
            result: $Utils.Optional<Data_entryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: adminOmit
    project_manager?: project_managerOmit
    project?: projectOmit
    data_entry?: data_entryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Project_managerCountOutputType
   */

  export type Project_managerCountOutputType = {
    project: number
  }

  export type Project_managerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Project_managerCountOutputTypeCountProjectArgs
  }

  // Custom InputTypes
  /**
   * Project_managerCountOutputType without action
   */
  export type Project_managerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_managerCountOutputType
     */
    select?: Project_managerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Project_managerCountOutputType without action
   */
  export type Project_managerCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    data_entry: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data_entry?: boolean | ProjectCountOutputTypeCountData_entryArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountData_entryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: data_entryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    role: number
    profile_image: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    fullname: string
    email: string
    role: $Enums.Role
    profile_image: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>



  export type adminSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "role" | "profile_image" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      email: string
      role: $Enums.Role
      profile_image: string | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'Int'>
    readonly fullname: FieldRef<"admin", 'String'>
    readonly email: FieldRef<"admin", 'String'>
    readonly role: FieldRef<"admin", 'Role'>
    readonly profile_image: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
    readonly createdAt: FieldRef<"admin", 'DateTime'>
    readonly updatedAt: FieldRef<"admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
  }


  /**
   * Model project_manager
   */

  export type AggregateProject_manager = {
    _count: Project_managerCountAggregateOutputType | null
    _avg: Project_managerAvgAggregateOutputType | null
    _sum: Project_managerSumAggregateOutputType | null
    _min: Project_managerMinAggregateOutputType | null
    _max: Project_managerMaxAggregateOutputType | null
  }

  export type Project_managerAvgAggregateOutputType = {
    id: number | null
  }

  export type Project_managerSumAggregateOutputType = {
    id: number | null
  }

  export type Project_managerMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    role: $Enums.Role | null
    profile_image: string | null
    verification_code: string | null
    email_verified: boolean | null
    status: $Enums.Status | null
    password: string | null
    temporal_password: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Project_managerMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    role: $Enums.Role | null
    profile_image: string | null
    verification_code: string | null
    email_verified: boolean | null
    status: $Enums.Status | null
    password: string | null
    temporal_password: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Project_managerCountAggregateOutputType = {
    id: number
    fullname: number
    username: number
    email: number
    phone_number: number
    role: number
    profile_image: number
    verification_code: number
    email_verified: number
    status: number
    password: number
    temporal_password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Project_managerAvgAggregateInputType = {
    id?: true
  }

  export type Project_managerSumAggregateInputType = {
    id?: true
  }

  export type Project_managerMinAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    profile_image?: true
    verification_code?: true
    email_verified?: true
    status?: true
    password?: true
    temporal_password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Project_managerMaxAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    profile_image?: true
    verification_code?: true
    email_verified?: true
    status?: true
    password?: true
    temporal_password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Project_managerCountAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    profile_image?: true
    verification_code?: true
    email_verified?: true
    status?: true
    password?: true
    temporal_password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Project_managerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_manager to aggregate.
     */
    where?: project_managerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_managers to fetch.
     */
    orderBy?: project_managerOrderByWithRelationInput | project_managerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: project_managerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned project_managers
    **/
    _count?: true | Project_managerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Project_managerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Project_managerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Project_managerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Project_managerMaxAggregateInputType
  }

  export type GetProject_managerAggregateType<T extends Project_managerAggregateArgs> = {
        [P in keyof T & keyof AggregateProject_manager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject_manager[P]>
      : GetScalarType<T[P], AggregateProject_manager[P]>
  }




  export type project_managerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: project_managerWhereInput
    orderBy?: project_managerOrderByWithAggregationInput | project_managerOrderByWithAggregationInput[]
    by: Project_managerScalarFieldEnum[] | Project_managerScalarFieldEnum
    having?: project_managerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Project_managerCountAggregateInputType | true
    _avg?: Project_managerAvgAggregateInputType
    _sum?: Project_managerSumAggregateInputType
    _min?: Project_managerMinAggregateInputType
    _max?: Project_managerMaxAggregateInputType
  }

  export type Project_managerGroupByOutputType = {
    id: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    profile_image: string | null
    verification_code: string | null
    email_verified: boolean
    status: $Enums.Status
    password: string
    temporal_password: boolean
    createdAt: Date
    updatedAt: Date
    _count: Project_managerCountAggregateOutputType | null
    _avg: Project_managerAvgAggregateOutputType | null
    _sum: Project_managerSumAggregateOutputType | null
    _min: Project_managerMinAggregateOutputType | null
    _max: Project_managerMaxAggregateOutputType | null
  }

  type GetProject_managerGroupByPayload<T extends project_managerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Project_managerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Project_managerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Project_managerGroupByOutputType[P]>
            : GetScalarType<T[P], Project_managerGroupByOutputType[P]>
        }
      >
    >


  export type project_managerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    profile_image?: boolean
    verification_code?: boolean
    email_verified?: boolean
    status?: boolean
    password?: boolean
    temporal_password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | project_manager$projectArgs<ExtArgs>
    _count?: boolean | Project_managerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project_manager"]>



  export type project_managerSelectScalar = {
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    profile_image?: boolean
    verification_code?: boolean
    email_verified?: boolean
    status?: boolean
    password?: boolean
    temporal_password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type project_managerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "username" | "email" | "phone_number" | "role" | "profile_image" | "verification_code" | "email_verified" | "status" | "password" | "temporal_password" | "createdAt" | "updatedAt", ExtArgs["result"]["project_manager"]>
  export type project_managerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | project_manager$projectArgs<ExtArgs>
    _count?: boolean | Project_managerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $project_managerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project_manager"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      username: string
      email: string
      phone_number: string
      role: $Enums.Role
      profile_image: string | null
      verification_code: string | null
      email_verified: boolean
      status: $Enums.Status
      password: string
      temporal_password: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project_manager"]>
    composites: {}
  }

  type project_managerGetPayload<S extends boolean | null | undefined | project_managerDefaultArgs> = $Result.GetResult<Prisma.$project_managerPayload, S>

  type project_managerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<project_managerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Project_managerCountAggregateInputType | true
    }

  export interface project_managerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project_manager'], meta: { name: 'project_manager' } }
    /**
     * Find zero or one Project_manager that matches the filter.
     * @param {project_managerFindUniqueArgs} args - Arguments to find a Project_manager
     * @example
     * // Get one Project_manager
     * const project_manager = await prisma.project_manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends project_managerFindUniqueArgs>(args: SelectSubset<T, project_managerFindUniqueArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project_manager that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {project_managerFindUniqueOrThrowArgs} args - Arguments to find a Project_manager
     * @example
     * // Get one Project_manager
     * const project_manager = await prisma.project_manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends project_managerFindUniqueOrThrowArgs>(args: SelectSubset<T, project_managerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_managerFindFirstArgs} args - Arguments to find a Project_manager
     * @example
     * // Get one Project_manager
     * const project_manager = await prisma.project_manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends project_managerFindFirstArgs>(args?: SelectSubset<T, project_managerFindFirstArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project_manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_managerFindFirstOrThrowArgs} args - Arguments to find a Project_manager
     * @example
     * // Get one Project_manager
     * const project_manager = await prisma.project_manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends project_managerFindFirstOrThrowArgs>(args?: SelectSubset<T, project_managerFindFirstOrThrowArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Project_managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_managerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Project_managers
     * const project_managers = await prisma.project_manager.findMany()
     * 
     * // Get first 10 Project_managers
     * const project_managers = await prisma.project_manager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const project_managerWithIdOnly = await prisma.project_manager.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends project_managerFindManyArgs>(args?: SelectSubset<T, project_managerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project_manager.
     * @param {project_managerCreateArgs} args - Arguments to create a Project_manager.
     * @example
     * // Create one Project_manager
     * const Project_manager = await prisma.project_manager.create({
     *   data: {
     *     // ... data to create a Project_manager
     *   }
     * })
     * 
     */
    create<T extends project_managerCreateArgs>(args: SelectSubset<T, project_managerCreateArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Project_managers.
     * @param {project_managerCreateManyArgs} args - Arguments to create many Project_managers.
     * @example
     * // Create many Project_managers
     * const project_manager = await prisma.project_manager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends project_managerCreateManyArgs>(args?: SelectSubset<T, project_managerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project_manager.
     * @param {project_managerDeleteArgs} args - Arguments to delete one Project_manager.
     * @example
     * // Delete one Project_manager
     * const Project_manager = await prisma.project_manager.delete({
     *   where: {
     *     // ... filter to delete one Project_manager
     *   }
     * })
     * 
     */
    delete<T extends project_managerDeleteArgs>(args: SelectSubset<T, project_managerDeleteArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project_manager.
     * @param {project_managerUpdateArgs} args - Arguments to update one Project_manager.
     * @example
     * // Update one Project_manager
     * const project_manager = await prisma.project_manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends project_managerUpdateArgs>(args: SelectSubset<T, project_managerUpdateArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Project_managers.
     * @param {project_managerDeleteManyArgs} args - Arguments to filter Project_managers to delete.
     * @example
     * // Delete a few Project_managers
     * const { count } = await prisma.project_manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends project_managerDeleteManyArgs>(args?: SelectSubset<T, project_managerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_managerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Project_managers
     * const project_manager = await prisma.project_manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends project_managerUpdateManyArgs>(args: SelectSubset<T, project_managerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project_manager.
     * @param {project_managerUpsertArgs} args - Arguments to update or create a Project_manager.
     * @example
     * // Update or create a Project_manager
     * const project_manager = await prisma.project_manager.upsert({
     *   create: {
     *     // ... data to create a Project_manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project_manager we want to update
     *   }
     * })
     */
    upsert<T extends project_managerUpsertArgs>(args: SelectSubset<T, project_managerUpsertArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Project_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_managerCountArgs} args - Arguments to filter Project_managers to count.
     * @example
     * // Count the number of Project_managers
     * const count = await prisma.project_manager.count({
     *   where: {
     *     // ... the filter for the Project_managers we want to count
     *   }
     * })
    **/
    count<T extends project_managerCountArgs>(
      args?: Subset<T, project_managerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Project_managerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_managerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Project_managerAggregateArgs>(args: Subset<T, Project_managerAggregateArgs>): Prisma.PrismaPromise<GetProject_managerAggregateType<T>>

    /**
     * Group by Project_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {project_managerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends project_managerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: project_managerGroupByArgs['orderBy'] }
        : { orderBy?: project_managerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, project_managerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProject_managerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project_manager model
   */
  readonly fields: project_managerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project_manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__project_managerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends project_manager$projectArgs<ExtArgs> = {}>(args?: Subset<T, project_manager$projectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project_manager model
   */
  interface project_managerFieldRefs {
    readonly id: FieldRef<"project_manager", 'Int'>
    readonly fullname: FieldRef<"project_manager", 'String'>
    readonly username: FieldRef<"project_manager", 'String'>
    readonly email: FieldRef<"project_manager", 'String'>
    readonly phone_number: FieldRef<"project_manager", 'String'>
    readonly role: FieldRef<"project_manager", 'Role'>
    readonly profile_image: FieldRef<"project_manager", 'String'>
    readonly verification_code: FieldRef<"project_manager", 'String'>
    readonly email_verified: FieldRef<"project_manager", 'Boolean'>
    readonly status: FieldRef<"project_manager", 'Status'>
    readonly password: FieldRef<"project_manager", 'String'>
    readonly temporal_password: FieldRef<"project_manager", 'Boolean'>
    readonly createdAt: FieldRef<"project_manager", 'DateTime'>
    readonly updatedAt: FieldRef<"project_manager", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * project_manager findUnique
   */
  export type project_managerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * Filter, which project_manager to fetch.
     */
    where: project_managerWhereUniqueInput
  }

  /**
   * project_manager findUniqueOrThrow
   */
  export type project_managerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * Filter, which project_manager to fetch.
     */
    where: project_managerWhereUniqueInput
  }

  /**
   * project_manager findFirst
   */
  export type project_managerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * Filter, which project_manager to fetch.
     */
    where?: project_managerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_managers to fetch.
     */
    orderBy?: project_managerOrderByWithRelationInput | project_managerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_managers.
     */
    cursor?: project_managerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_managers.
     */
    distinct?: Project_managerScalarFieldEnum | Project_managerScalarFieldEnum[]
  }

  /**
   * project_manager findFirstOrThrow
   */
  export type project_managerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * Filter, which project_manager to fetch.
     */
    where?: project_managerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_managers to fetch.
     */
    orderBy?: project_managerOrderByWithRelationInput | project_managerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for project_managers.
     */
    cursor?: project_managerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of project_managers.
     */
    distinct?: Project_managerScalarFieldEnum | Project_managerScalarFieldEnum[]
  }

  /**
   * project_manager findMany
   */
  export type project_managerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * Filter, which project_managers to fetch.
     */
    where?: project_managerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of project_managers to fetch.
     */
    orderBy?: project_managerOrderByWithRelationInput | project_managerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing project_managers.
     */
    cursor?: project_managerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` project_managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` project_managers.
     */
    skip?: number
    distinct?: Project_managerScalarFieldEnum | Project_managerScalarFieldEnum[]
  }

  /**
   * project_manager create
   */
  export type project_managerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * The data needed to create a project_manager.
     */
    data: XOR<project_managerCreateInput, project_managerUncheckedCreateInput>
  }

  /**
   * project_manager createMany
   */
  export type project_managerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many project_managers.
     */
    data: project_managerCreateManyInput | project_managerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project_manager update
   */
  export type project_managerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * The data needed to update a project_manager.
     */
    data: XOR<project_managerUpdateInput, project_managerUncheckedUpdateInput>
    /**
     * Choose, which project_manager to update.
     */
    where: project_managerWhereUniqueInput
  }

  /**
   * project_manager updateMany
   */
  export type project_managerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update project_managers.
     */
    data: XOR<project_managerUpdateManyMutationInput, project_managerUncheckedUpdateManyInput>
    /**
     * Filter which project_managers to update
     */
    where?: project_managerWhereInput
    /**
     * Limit how many project_managers to update.
     */
    limit?: number
  }

  /**
   * project_manager upsert
   */
  export type project_managerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * The filter to search for the project_manager to update in case it exists.
     */
    where: project_managerWhereUniqueInput
    /**
     * In case the project_manager found by the `where` argument doesn't exist, create a new project_manager with this data.
     */
    create: XOR<project_managerCreateInput, project_managerUncheckedCreateInput>
    /**
     * In case the project_manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<project_managerUpdateInput, project_managerUncheckedUpdateInput>
  }

  /**
   * project_manager delete
   */
  export type project_managerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
    /**
     * Filter which project_manager to delete.
     */
    where: project_managerWhereUniqueInput
  }

  /**
   * project_manager deleteMany
   */
  export type project_managerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project_managers to delete
     */
    where?: project_managerWhereInput
    /**
     * Limit how many project_managers to delete.
     */
    limit?: number
  }

  /**
   * project_manager.project
   */
  export type project_manager$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    where?: projectWhereInput
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    cursor?: projectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project_manager without action
   */
  export type project_managerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project_manager
     */
    select?: project_managerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project_manager
     */
    omit?: project_managerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: project_managerInclude<ExtArgs> | null
  }


  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    project_manager_id: number | null
    target_entry: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    project_manager_id: number | null
    target_entry: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    project_name: string | null
    project_manager_id: number | null
    start_date: Date | null
    end_date: Date | null
    description: string | null
    target_entry: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    project_name: string | null
    project_manager_id: number | null
    start_date: Date | null
    end_date: Date | null
    description: string | null
    target_entry: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    project_name: number
    project_manager_id: number
    start_date: number
    end_date: number
    description: number
    target_entry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    project_manager_id?: true
    target_entry?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    project_manager_id?: true
    target_entry?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    project_name?: true
    project_manager_id?: true
    start_date?: true
    end_date?: true
    description?: true
    target_entry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    project_name?: true
    project_manager_id?: true
    start_date?: true
    end_date?: true
    description?: true
    target_entry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    project_name?: true
    project_manager_id?: true
    start_date?: true
    end_date?: true
    description?: true
    target_entry?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    project_name: string
    project_manager_id: number
    start_date: Date
    end_date: Date
    description: string
    target_entry: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_name?: boolean
    project_manager_id?: boolean
    start_date?: boolean
    end_date?: boolean
    description?: boolean
    target_entry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project_manager?: boolean | project_managerDefaultArgs<ExtArgs>
    data_entry?: boolean | project$data_entryArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type projectSelectScalar = {
    id?: boolean
    project_name?: boolean
    project_manager_id?: boolean
    start_date?: boolean
    end_date?: boolean
    description?: boolean
    target_entry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type projectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_name" | "project_manager_id" | "start_date" | "end_date" | "description" | "target_entry" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project_manager?: boolean | project_managerDefaultArgs<ExtArgs>
    data_entry?: boolean | project$data_entryArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project"
    objects: {
      project_manager: Prisma.$project_managerPayload<ExtArgs>
      data_entry: Prisma.$data_entryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_name: string
      project_manager_id: number
      start_date: Date
      end_date: Date
      description: string
      target_entry: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<Prisma.$projectPayload, S>

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project'], meta: { name: 'project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectFindUniqueArgs>(args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs>(args: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectFindFirstArgs>(args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs>(args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectFindManyArgs>(args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends projectCreateArgs>(args: SelectSubset<T, projectCreateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectCreateManyArgs>(args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends projectDeleteArgs>(args: SelectSubset<T, projectDeleteArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectUpdateArgs>(args: SelectSubset<T, projectUpdateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectDeleteManyArgs>(args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectUpdateManyArgs>(args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends projectUpsertArgs>(args: SelectSubset<T, projectUpsertArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project model
   */
  readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project_manager<T extends project_managerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, project_managerDefaultArgs<ExtArgs>>): Prisma__project_managerClient<$Result.GetResult<Prisma.$project_managerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    data_entry<T extends project$data_entryArgs<ExtArgs> = {}>(args?: Subset<T, project$data_entryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly id: FieldRef<"project", 'Int'>
    readonly project_name: FieldRef<"project", 'String'>
    readonly project_manager_id: FieldRef<"project", 'Int'>
    readonly start_date: FieldRef<"project", 'DateTime'>
    readonly end_date: FieldRef<"project", 'DateTime'>
    readonly description: FieldRef<"project", 'String'>
    readonly target_entry: FieldRef<"project", 'Int'>
    readonly createdAt: FieldRef<"project", 'DateTime'>
    readonly updatedAt: FieldRef<"project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>
  }

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>
  }

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * project.data_entry
   */
  export type project$data_entryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    where?: data_entryWhereInput
    orderBy?: data_entryOrderByWithRelationInput | data_entryOrderByWithRelationInput[]
    cursor?: data_entryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Data_entryScalarFieldEnum | Data_entryScalarFieldEnum[]
  }

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
  }


  /**
   * Model data_entry
   */

  export type AggregateData_entry = {
    _count: Data_entryCountAggregateOutputType | null
    _avg: Data_entryAvgAggregateOutputType | null
    _sum: Data_entrySumAggregateOutputType | null
    _min: Data_entryMinAggregateOutputType | null
    _max: Data_entryMaxAggregateOutputType | null
  }

  export type Data_entryAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Data_entrySumAggregateOutputType = {
    id: number | null
    project_id: number | null
  }

  export type Data_entryMinAggregateOutputType = {
    id: number | null
    project_id: number | null
    date: Date | null
    location: string | null
    description: string | null
    image_url: string | null
    video_url: string | null
    document_url: string | null
    file: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Data_entryMaxAggregateOutputType = {
    id: number | null
    project_id: number | null
    date: Date | null
    location: string | null
    description: string | null
    image_url: string | null
    video_url: string | null
    document_url: string | null
    file: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Data_entryCountAggregateOutputType = {
    id: number
    project_id: number
    date: number
    location: number
    description: number
    image_url: number
    video_url: number
    document_url: number
    file: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Data_entryAvgAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Data_entrySumAggregateInputType = {
    id?: true
    project_id?: true
  }

  export type Data_entryMinAggregateInputType = {
    id?: true
    project_id?: true
    date?: true
    location?: true
    description?: true
    image_url?: true
    video_url?: true
    document_url?: true
    file?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Data_entryMaxAggregateInputType = {
    id?: true
    project_id?: true
    date?: true
    location?: true
    description?: true
    image_url?: true
    video_url?: true
    document_url?: true
    file?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Data_entryCountAggregateInputType = {
    id?: true
    project_id?: true
    date?: true
    location?: true
    description?: true
    image_url?: true
    video_url?: true
    document_url?: true
    file?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Data_entryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which data_entry to aggregate.
     */
    where?: data_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data_entries to fetch.
     */
    orderBy?: data_entryOrderByWithRelationInput | data_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: data_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned data_entries
    **/
    _count?: true | Data_entryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Data_entryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Data_entrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Data_entryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Data_entryMaxAggregateInputType
  }

  export type GetData_entryAggregateType<T extends Data_entryAggregateArgs> = {
        [P in keyof T & keyof AggregateData_entry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateData_entry[P]>
      : GetScalarType<T[P], AggregateData_entry[P]>
  }




  export type data_entryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: data_entryWhereInput
    orderBy?: data_entryOrderByWithAggregationInput | data_entryOrderByWithAggregationInput[]
    by: Data_entryScalarFieldEnum[] | Data_entryScalarFieldEnum
    having?: data_entryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Data_entryCountAggregateInputType | true
    _avg?: Data_entryAvgAggregateInputType
    _sum?: Data_entrySumAggregateInputType
    _min?: Data_entryMinAggregateInputType
    _max?: Data_entryMaxAggregateInputType
  }

  export type Data_entryGroupByOutputType = {
    id: number
    project_id: number
    date: Date
    location: string
    description: string
    image_url: string | null
    video_url: string | null
    document_url: string | null
    file: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: Data_entryCountAggregateOutputType | null
    _avg: Data_entryAvgAggregateOutputType | null
    _sum: Data_entrySumAggregateOutputType | null
    _min: Data_entryMinAggregateOutputType | null
    _max: Data_entryMaxAggregateOutputType | null
  }

  type GetData_entryGroupByPayload<T extends data_entryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Data_entryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Data_entryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Data_entryGroupByOutputType[P]>
            : GetScalarType<T[P], Data_entryGroupByOutputType[P]>
        }
      >
    >


  export type data_entrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    date?: boolean
    location?: boolean
    description?: boolean
    image_url?: boolean
    video_url?: boolean
    document_url?: boolean
    file?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["data_entry"]>



  export type data_entrySelectScalar = {
    id?: boolean
    project_id?: boolean
    date?: boolean
    location?: boolean
    description?: boolean
    image_url?: boolean
    video_url?: boolean
    document_url?: boolean
    file?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type data_entryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_id" | "date" | "location" | "description" | "image_url" | "video_url" | "document_url" | "file" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["data_entry"]>
  export type data_entryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
  }

  export type $data_entryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "data_entry"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_id: number
      date: Date
      location: string
      description: string
      image_url: string | null
      video_url: string | null
      document_url: string | null
      file: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["data_entry"]>
    composites: {}
  }

  type data_entryGetPayload<S extends boolean | null | undefined | data_entryDefaultArgs> = $Result.GetResult<Prisma.$data_entryPayload, S>

  type data_entryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<data_entryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Data_entryCountAggregateInputType | true
    }

  export interface data_entryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['data_entry'], meta: { name: 'data_entry' } }
    /**
     * Find zero or one Data_entry that matches the filter.
     * @param {data_entryFindUniqueArgs} args - Arguments to find a Data_entry
     * @example
     * // Get one Data_entry
     * const data_entry = await prisma.data_entry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends data_entryFindUniqueArgs>(args: SelectSubset<T, data_entryFindUniqueArgs<ExtArgs>>): Prisma__data_entryClient<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Data_entry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {data_entryFindUniqueOrThrowArgs} args - Arguments to find a Data_entry
     * @example
     * // Get one Data_entry
     * const data_entry = await prisma.data_entry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends data_entryFindUniqueOrThrowArgs>(args: SelectSubset<T, data_entryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__data_entryClient<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Data_entry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_entryFindFirstArgs} args - Arguments to find a Data_entry
     * @example
     * // Get one Data_entry
     * const data_entry = await prisma.data_entry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends data_entryFindFirstArgs>(args?: SelectSubset<T, data_entryFindFirstArgs<ExtArgs>>): Prisma__data_entryClient<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Data_entry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_entryFindFirstOrThrowArgs} args - Arguments to find a Data_entry
     * @example
     * // Get one Data_entry
     * const data_entry = await prisma.data_entry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends data_entryFindFirstOrThrowArgs>(args?: SelectSubset<T, data_entryFindFirstOrThrowArgs<ExtArgs>>): Prisma__data_entryClient<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Data_entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_entryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Data_entries
     * const data_entries = await prisma.data_entry.findMany()
     * 
     * // Get first 10 Data_entries
     * const data_entries = await prisma.data_entry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const data_entryWithIdOnly = await prisma.data_entry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends data_entryFindManyArgs>(args?: SelectSubset<T, data_entryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Data_entry.
     * @param {data_entryCreateArgs} args - Arguments to create a Data_entry.
     * @example
     * // Create one Data_entry
     * const Data_entry = await prisma.data_entry.create({
     *   data: {
     *     // ... data to create a Data_entry
     *   }
     * })
     * 
     */
    create<T extends data_entryCreateArgs>(args: SelectSubset<T, data_entryCreateArgs<ExtArgs>>): Prisma__data_entryClient<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Data_entries.
     * @param {data_entryCreateManyArgs} args - Arguments to create many Data_entries.
     * @example
     * // Create many Data_entries
     * const data_entry = await prisma.data_entry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends data_entryCreateManyArgs>(args?: SelectSubset<T, data_entryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Data_entry.
     * @param {data_entryDeleteArgs} args - Arguments to delete one Data_entry.
     * @example
     * // Delete one Data_entry
     * const Data_entry = await prisma.data_entry.delete({
     *   where: {
     *     // ... filter to delete one Data_entry
     *   }
     * })
     * 
     */
    delete<T extends data_entryDeleteArgs>(args: SelectSubset<T, data_entryDeleteArgs<ExtArgs>>): Prisma__data_entryClient<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Data_entry.
     * @param {data_entryUpdateArgs} args - Arguments to update one Data_entry.
     * @example
     * // Update one Data_entry
     * const data_entry = await prisma.data_entry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends data_entryUpdateArgs>(args: SelectSubset<T, data_entryUpdateArgs<ExtArgs>>): Prisma__data_entryClient<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Data_entries.
     * @param {data_entryDeleteManyArgs} args - Arguments to filter Data_entries to delete.
     * @example
     * // Delete a few Data_entries
     * const { count } = await prisma.data_entry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends data_entryDeleteManyArgs>(args?: SelectSubset<T, data_entryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Data_entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_entryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Data_entries
     * const data_entry = await prisma.data_entry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends data_entryUpdateManyArgs>(args: SelectSubset<T, data_entryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Data_entry.
     * @param {data_entryUpsertArgs} args - Arguments to update or create a Data_entry.
     * @example
     * // Update or create a Data_entry
     * const data_entry = await prisma.data_entry.upsert({
     *   create: {
     *     // ... data to create a Data_entry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Data_entry we want to update
     *   }
     * })
     */
    upsert<T extends data_entryUpsertArgs>(args: SelectSubset<T, data_entryUpsertArgs<ExtArgs>>): Prisma__data_entryClient<$Result.GetResult<Prisma.$data_entryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Data_entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_entryCountArgs} args - Arguments to filter Data_entries to count.
     * @example
     * // Count the number of Data_entries
     * const count = await prisma.data_entry.count({
     *   where: {
     *     // ... the filter for the Data_entries we want to count
     *   }
     * })
    **/
    count<T extends data_entryCountArgs>(
      args?: Subset<T, data_entryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Data_entryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Data_entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Data_entryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Data_entryAggregateArgs>(args: Subset<T, Data_entryAggregateArgs>): Prisma.PrismaPromise<GetData_entryAggregateType<T>>

    /**
     * Group by Data_entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {data_entryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends data_entryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: data_entryGroupByArgs['orderBy'] }
        : { orderBy?: data_entryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, data_entryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetData_entryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the data_entry model
   */
  readonly fields: data_entryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for data_entry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__data_entryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the data_entry model
   */
  interface data_entryFieldRefs {
    readonly id: FieldRef<"data_entry", 'Int'>
    readonly project_id: FieldRef<"data_entry", 'Int'>
    readonly date: FieldRef<"data_entry", 'DateTime'>
    readonly location: FieldRef<"data_entry", 'String'>
    readonly description: FieldRef<"data_entry", 'String'>
    readonly image_url: FieldRef<"data_entry", 'String'>
    readonly video_url: FieldRef<"data_entry", 'String'>
    readonly document_url: FieldRef<"data_entry", 'String'>
    readonly file: FieldRef<"data_entry", 'String'>
    readonly metadata: FieldRef<"data_entry", 'Json'>
    readonly createdAt: FieldRef<"data_entry", 'DateTime'>
    readonly updatedAt: FieldRef<"data_entry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * data_entry findUnique
   */
  export type data_entryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * Filter, which data_entry to fetch.
     */
    where: data_entryWhereUniqueInput
  }

  /**
   * data_entry findUniqueOrThrow
   */
  export type data_entryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * Filter, which data_entry to fetch.
     */
    where: data_entryWhereUniqueInput
  }

  /**
   * data_entry findFirst
   */
  export type data_entryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * Filter, which data_entry to fetch.
     */
    where?: data_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data_entries to fetch.
     */
    orderBy?: data_entryOrderByWithRelationInput | data_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for data_entries.
     */
    cursor?: data_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of data_entries.
     */
    distinct?: Data_entryScalarFieldEnum | Data_entryScalarFieldEnum[]
  }

  /**
   * data_entry findFirstOrThrow
   */
  export type data_entryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * Filter, which data_entry to fetch.
     */
    where?: data_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data_entries to fetch.
     */
    orderBy?: data_entryOrderByWithRelationInput | data_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for data_entries.
     */
    cursor?: data_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data_entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of data_entries.
     */
    distinct?: Data_entryScalarFieldEnum | Data_entryScalarFieldEnum[]
  }

  /**
   * data_entry findMany
   */
  export type data_entryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * Filter, which data_entries to fetch.
     */
    where?: data_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of data_entries to fetch.
     */
    orderBy?: data_entryOrderByWithRelationInput | data_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing data_entries.
     */
    cursor?: data_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` data_entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` data_entries.
     */
    skip?: number
    distinct?: Data_entryScalarFieldEnum | Data_entryScalarFieldEnum[]
  }

  /**
   * data_entry create
   */
  export type data_entryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * The data needed to create a data_entry.
     */
    data: XOR<data_entryCreateInput, data_entryUncheckedCreateInput>
  }

  /**
   * data_entry createMany
   */
  export type data_entryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many data_entries.
     */
    data: data_entryCreateManyInput | data_entryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * data_entry update
   */
  export type data_entryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * The data needed to update a data_entry.
     */
    data: XOR<data_entryUpdateInput, data_entryUncheckedUpdateInput>
    /**
     * Choose, which data_entry to update.
     */
    where: data_entryWhereUniqueInput
  }

  /**
   * data_entry updateMany
   */
  export type data_entryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update data_entries.
     */
    data: XOR<data_entryUpdateManyMutationInput, data_entryUncheckedUpdateManyInput>
    /**
     * Filter which data_entries to update
     */
    where?: data_entryWhereInput
    /**
     * Limit how many data_entries to update.
     */
    limit?: number
  }

  /**
   * data_entry upsert
   */
  export type data_entryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * The filter to search for the data_entry to update in case it exists.
     */
    where: data_entryWhereUniqueInput
    /**
     * In case the data_entry found by the `where` argument doesn't exist, create a new data_entry with this data.
     */
    create: XOR<data_entryCreateInput, data_entryUncheckedCreateInput>
    /**
     * In case the data_entry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<data_entryUpdateInput, data_entryUncheckedUpdateInput>
  }

  /**
   * data_entry delete
   */
  export type data_entryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
    /**
     * Filter which data_entry to delete.
     */
    where: data_entryWhereUniqueInput
  }

  /**
   * data_entry deleteMany
   */
  export type data_entryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which data_entries to delete
     */
    where?: data_entryWhereInput
    /**
     * Limit how many data_entries to delete.
     */
    limit?: number
  }

  /**
   * data_entry without action
   */
  export type data_entryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the data_entry
     */
    select?: data_entrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the data_entry
     */
    omit?: data_entryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: data_entryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    role: 'role',
    profile_image: 'profile_image',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const Project_managerScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    phone_number: 'phone_number',
    role: 'role',
    profile_image: 'profile_image',
    verification_code: 'verification_code',
    email_verified: 'email_verified',
    status: 'status',
    password: 'password',
    temporal_password: 'temporal_password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Project_managerScalarFieldEnum = (typeof Project_managerScalarFieldEnum)[keyof typeof Project_managerScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    project_name: 'project_name',
    project_manager_id: 'project_manager_id',
    start_date: 'start_date',
    end_date: 'end_date',
    description: 'description',
    target_entry: 'target_entry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const Data_entryScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    date: 'date',
    location: 'location',
    description: 'description',
    image_url: 'image_url',
    video_url: 'video_url',
    document_url: 'document_url',
    file: 'file',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Data_entryScalarFieldEnum = (typeof Data_entryScalarFieldEnum)[keyof typeof Data_entryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const adminOrderByRelevanceFieldEnum: {
    fullname: 'fullname',
    email: 'email',
    profile_image: 'profile_image',
    password: 'password'
  };

  export type adminOrderByRelevanceFieldEnum = (typeof adminOrderByRelevanceFieldEnum)[keyof typeof adminOrderByRelevanceFieldEnum]


  export const project_managerOrderByRelevanceFieldEnum: {
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    phone_number: 'phone_number',
    profile_image: 'profile_image',
    verification_code: 'verification_code',
    password: 'password'
  };

  export type project_managerOrderByRelevanceFieldEnum = (typeof project_managerOrderByRelevanceFieldEnum)[keyof typeof project_managerOrderByRelevanceFieldEnum]


  export const projectOrderByRelevanceFieldEnum: {
    project_name: 'project_name',
    description: 'description'
  };

  export type projectOrderByRelevanceFieldEnum = (typeof projectOrderByRelevanceFieldEnum)[keyof typeof projectOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const data_entryOrderByRelevanceFieldEnum: {
    location: 'location',
    description: 'description',
    image_url: 'image_url',
    video_url: 'video_url',
    document_url: 'document_url',
    file: 'file'
  };

  export type data_entryOrderByRelevanceFieldEnum = (typeof data_entryOrderByRelevanceFieldEnum)[keyof typeof data_entryOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: IntFilter<"admin"> | number
    fullname?: StringFilter<"admin"> | string
    email?: StringFilter<"admin"> | string
    role?: EnumRoleFilter<"admin"> | $Enums.Role
    profile_image?: StringNullableFilter<"admin"> | string | null
    password?: StringFilter<"admin"> | string
    createdAt?: DateTimeFilter<"admin"> | Date | string
    updatedAt?: DateTimeFilter<"admin"> | Date | string
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: adminOrderByRelevanceInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    fullname?: StringFilter<"admin"> | string
    role?: EnumRoleFilter<"admin"> | $Enums.Role
    profile_image?: StringNullableFilter<"admin"> | string | null
    password?: StringFilter<"admin"> | string
    createdAt?: DateTimeFilter<"admin"> | Date | string
    updatedAt?: DateTimeFilter<"admin"> | Date | string
  }, "id" | "email">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin"> | number
    fullname?: StringWithAggregatesFilter<"admin"> | string
    email?: StringWithAggregatesFilter<"admin"> | string
    role?: EnumRoleWithAggregatesFilter<"admin"> | $Enums.Role
    profile_image?: StringNullableWithAggregatesFilter<"admin"> | string | null
    password?: StringWithAggregatesFilter<"admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"admin"> | Date | string
  }

  export type project_managerWhereInput = {
    AND?: project_managerWhereInput | project_managerWhereInput[]
    OR?: project_managerWhereInput[]
    NOT?: project_managerWhereInput | project_managerWhereInput[]
    id?: IntFilter<"project_manager"> | number
    fullname?: StringFilter<"project_manager"> | string
    username?: StringFilter<"project_manager"> | string
    email?: StringFilter<"project_manager"> | string
    phone_number?: StringFilter<"project_manager"> | string
    role?: EnumRoleFilter<"project_manager"> | $Enums.Role
    profile_image?: StringNullableFilter<"project_manager"> | string | null
    verification_code?: StringNullableFilter<"project_manager"> | string | null
    email_verified?: BoolFilter<"project_manager"> | boolean
    status?: EnumStatusFilter<"project_manager"> | $Enums.Status
    password?: StringFilter<"project_manager"> | string
    temporal_password?: BoolFilter<"project_manager"> | boolean
    createdAt?: DateTimeFilter<"project_manager"> | Date | string
    updatedAt?: DateTimeFilter<"project_manager"> | Date | string
    project?: ProjectListRelationFilter
  }

  export type project_managerOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    verification_code?: SortOrderInput | SortOrder
    email_verified?: SortOrder
    status?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: projectOrderByRelationAggregateInput
    _relevance?: project_managerOrderByRelevanceInput
  }

  export type project_managerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    phone_number?: string
    AND?: project_managerWhereInput | project_managerWhereInput[]
    OR?: project_managerWhereInput[]
    NOT?: project_managerWhereInput | project_managerWhereInput[]
    fullname?: StringFilter<"project_manager"> | string
    role?: EnumRoleFilter<"project_manager"> | $Enums.Role
    profile_image?: StringNullableFilter<"project_manager"> | string | null
    verification_code?: StringNullableFilter<"project_manager"> | string | null
    email_verified?: BoolFilter<"project_manager"> | boolean
    status?: EnumStatusFilter<"project_manager"> | $Enums.Status
    password?: StringFilter<"project_manager"> | string
    temporal_password?: BoolFilter<"project_manager"> | boolean
    createdAt?: DateTimeFilter<"project_manager"> | Date | string
    updatedAt?: DateTimeFilter<"project_manager"> | Date | string
    project?: ProjectListRelationFilter
  }, "id" | "username" | "email" | "phone_number">

  export type project_managerOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    verification_code?: SortOrderInput | SortOrder
    email_verified?: SortOrder
    status?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: project_managerCountOrderByAggregateInput
    _avg?: project_managerAvgOrderByAggregateInput
    _max?: project_managerMaxOrderByAggregateInput
    _min?: project_managerMinOrderByAggregateInput
    _sum?: project_managerSumOrderByAggregateInput
  }

  export type project_managerScalarWhereWithAggregatesInput = {
    AND?: project_managerScalarWhereWithAggregatesInput | project_managerScalarWhereWithAggregatesInput[]
    OR?: project_managerScalarWhereWithAggregatesInput[]
    NOT?: project_managerScalarWhereWithAggregatesInput | project_managerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"project_manager"> | number
    fullname?: StringWithAggregatesFilter<"project_manager"> | string
    username?: StringWithAggregatesFilter<"project_manager"> | string
    email?: StringWithAggregatesFilter<"project_manager"> | string
    phone_number?: StringWithAggregatesFilter<"project_manager"> | string
    role?: EnumRoleWithAggregatesFilter<"project_manager"> | $Enums.Role
    profile_image?: StringNullableWithAggregatesFilter<"project_manager"> | string | null
    verification_code?: StringNullableWithAggregatesFilter<"project_manager"> | string | null
    email_verified?: BoolWithAggregatesFilter<"project_manager"> | boolean
    status?: EnumStatusWithAggregatesFilter<"project_manager"> | $Enums.Status
    password?: StringWithAggregatesFilter<"project_manager"> | string
    temporal_password?: BoolWithAggregatesFilter<"project_manager"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"project_manager"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"project_manager"> | Date | string
  }

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    id?: IntFilter<"project"> | number
    project_name?: StringFilter<"project"> | string
    project_manager_id?: IntFilter<"project"> | number
    start_date?: DateTimeFilter<"project"> | Date | string
    end_date?: DateTimeFilter<"project"> | Date | string
    description?: StringFilter<"project"> | string
    target_entry?: IntFilter<"project"> | number
    createdAt?: DateTimeFilter<"project"> | Date | string
    updatedAt?: DateTimeFilter<"project"> | Date | string
    project_manager?: XOR<Project_managerScalarRelationFilter, project_managerWhereInput>
    data_entry?: Data_entryListRelationFilter
  }

  export type projectOrderByWithRelationInput = {
    id?: SortOrder
    project_name?: SortOrder
    project_manager_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    description?: SortOrder
    target_entry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project_manager?: project_managerOrderByWithRelationInput
    data_entry?: data_entryOrderByRelationAggregateInput
    _relevance?: projectOrderByRelevanceInput
  }

  export type projectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    project_name?: StringFilter<"project"> | string
    project_manager_id?: IntFilter<"project"> | number
    start_date?: DateTimeFilter<"project"> | Date | string
    end_date?: DateTimeFilter<"project"> | Date | string
    description?: StringFilter<"project"> | string
    target_entry?: IntFilter<"project"> | number
    createdAt?: DateTimeFilter<"project"> | Date | string
    updatedAt?: DateTimeFilter<"project"> | Date | string
    project_manager?: XOR<Project_managerScalarRelationFilter, project_managerWhereInput>
    data_entry?: Data_entryListRelationFilter
  }, "id">

  export type projectOrderByWithAggregationInput = {
    id?: SortOrder
    project_name?: SortOrder
    project_manager_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    description?: SortOrder
    target_entry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: projectCountOrderByAggregateInput
    _avg?: projectAvgOrderByAggregateInput
    _max?: projectMaxOrderByAggregateInput
    _min?: projectMinOrderByAggregateInput
    _sum?: projectSumOrderByAggregateInput
  }

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    OR?: projectScalarWhereWithAggregatesInput[]
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"project"> | number
    project_name?: StringWithAggregatesFilter<"project"> | string
    project_manager_id?: IntWithAggregatesFilter<"project"> | number
    start_date?: DateTimeWithAggregatesFilter<"project"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"project"> | Date | string
    description?: StringWithAggregatesFilter<"project"> | string
    target_entry?: IntWithAggregatesFilter<"project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"project"> | Date | string
  }

  export type data_entryWhereInput = {
    AND?: data_entryWhereInput | data_entryWhereInput[]
    OR?: data_entryWhereInput[]
    NOT?: data_entryWhereInput | data_entryWhereInput[]
    id?: IntFilter<"data_entry"> | number
    project_id?: IntFilter<"data_entry"> | number
    date?: DateTimeFilter<"data_entry"> | Date | string
    location?: StringFilter<"data_entry"> | string
    description?: StringFilter<"data_entry"> | string
    image_url?: StringNullableFilter<"data_entry"> | string | null
    video_url?: StringNullableFilter<"data_entry"> | string | null
    document_url?: StringNullableFilter<"data_entry"> | string | null
    file?: StringNullableFilter<"data_entry"> | string | null
    metadata?: JsonNullableFilter<"data_entry">
    createdAt?: DateTimeFilter<"data_entry"> | Date | string
    updatedAt?: DateTimeFilter<"data_entry"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }

  export type data_entryOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrder
    date?: SortOrder
    location?: SortOrder
    description?: SortOrder
    image_url?: SortOrderInput | SortOrder
    video_url?: SortOrderInput | SortOrder
    document_url?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: projectOrderByWithRelationInput
    _relevance?: data_entryOrderByRelevanceInput
  }

  export type data_entryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: data_entryWhereInput | data_entryWhereInput[]
    OR?: data_entryWhereInput[]
    NOT?: data_entryWhereInput | data_entryWhereInput[]
    project_id?: IntFilter<"data_entry"> | number
    date?: DateTimeFilter<"data_entry"> | Date | string
    location?: StringFilter<"data_entry"> | string
    description?: StringFilter<"data_entry"> | string
    image_url?: StringNullableFilter<"data_entry"> | string | null
    video_url?: StringNullableFilter<"data_entry"> | string | null
    document_url?: StringNullableFilter<"data_entry"> | string | null
    file?: StringNullableFilter<"data_entry"> | string | null
    metadata?: JsonNullableFilter<"data_entry">
    createdAt?: DateTimeFilter<"data_entry"> | Date | string
    updatedAt?: DateTimeFilter<"data_entry"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }, "id">

  export type data_entryOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrder
    date?: SortOrder
    location?: SortOrder
    description?: SortOrder
    image_url?: SortOrderInput | SortOrder
    video_url?: SortOrderInput | SortOrder
    document_url?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: data_entryCountOrderByAggregateInput
    _avg?: data_entryAvgOrderByAggregateInput
    _max?: data_entryMaxOrderByAggregateInput
    _min?: data_entryMinOrderByAggregateInput
    _sum?: data_entrySumOrderByAggregateInput
  }

  export type data_entryScalarWhereWithAggregatesInput = {
    AND?: data_entryScalarWhereWithAggregatesInput | data_entryScalarWhereWithAggregatesInput[]
    OR?: data_entryScalarWhereWithAggregatesInput[]
    NOT?: data_entryScalarWhereWithAggregatesInput | data_entryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"data_entry"> | number
    project_id?: IntWithAggregatesFilter<"data_entry"> | number
    date?: DateTimeWithAggregatesFilter<"data_entry"> | Date | string
    location?: StringWithAggregatesFilter<"data_entry"> | string
    description?: StringWithAggregatesFilter<"data_entry"> | string
    image_url?: StringNullableWithAggregatesFilter<"data_entry"> | string | null
    video_url?: StringNullableWithAggregatesFilter<"data_entry"> | string | null
    document_url?: StringNullableWithAggregatesFilter<"data_entry"> | string | null
    file?: StringNullableWithAggregatesFilter<"data_entry"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"data_entry">
    createdAt?: DateTimeWithAggregatesFilter<"data_entry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"data_entry"> | Date | string
  }

  export type adminCreateInput = {
    fullname: string
    email: string
    role?: $Enums.Role
    profile_image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type adminUncheckedCreateInput = {
    id?: number
    fullname: string
    email: string
    role?: $Enums.Role
    profile_image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type adminUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminCreateManyInput = {
    id?: number
    fullname: string
    email: string
    role?: $Enums.Role
    profile_image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type adminUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type project_managerCreateInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project?: projectCreateNestedManyWithoutProject_managerInput
  }

  export type project_managerUncheckedCreateInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project?: projectUncheckedCreateNestedManyWithoutProject_managerInput
  }

  export type project_managerUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateManyWithoutProject_managerNestedInput
  }

  export type project_managerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUncheckedUpdateManyWithoutProject_managerNestedInput
  }

  export type project_managerCreateManyInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type project_managerUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type project_managerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectCreateInput = {
    project_name: string
    start_date: Date | string
    end_date: Date | string
    description: string
    target_entry: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project_manager: project_managerCreateNestedOneWithoutProjectInput
    data_entry?: data_entryCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateInput = {
    id?: number
    project_name: string
    project_manager_id: number
    start_date: Date | string
    end_date: Date | string
    description: string
    target_entry: number
    createdAt?: Date | string
    updatedAt?: Date | string
    data_entry?: data_entryUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectUpdateInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project_manager?: project_managerUpdateOneRequiredWithoutProjectNestedInput
    data_entry?: data_entryUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    project_manager_id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data_entry?: data_entryUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectCreateManyInput = {
    id?: number
    project_name: string
    project_manager_id: number
    start_date: Date | string
    end_date: Date | string
    description: string
    target_entry: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectUpdateManyMutationInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    project_manager_id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type data_entryCreateInput = {
    date: Date | string
    location: string
    description: string
    image_url?: string | null
    video_url?: string | null
    document_url?: string | null
    file?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    project: projectCreateNestedOneWithoutData_entryInput
  }

  export type data_entryUncheckedCreateInput = {
    id?: number
    project_id: number
    date: Date | string
    location: string
    description: string
    image_url?: string | null
    video_url?: string | null
    document_url?: string | null
    file?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type data_entryUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateOneRequiredWithoutData_entryNestedInput
  }

  export type data_entryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type data_entryCreateManyInput = {
    id?: number
    project_id: number
    date: Date | string
    location: string
    description: string
    image_url?: string | null
    video_url?: string | null
    document_url?: string | null
    file?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type data_entryUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type data_entryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type adminOrderByRelevanceInput = {
    fields: adminOrderByRelevanceFieldEnum | adminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type ProjectListRelationFilter = {
    every?: projectWhereInput
    some?: projectWhereInput
    none?: projectWhereInput
  }

  export type projectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type project_managerOrderByRelevanceInput = {
    fields: project_managerOrderByRelevanceFieldEnum | project_managerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type project_managerCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    verification_code?: SortOrder
    email_verified?: SortOrder
    status?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type project_managerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type project_managerMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    verification_code?: SortOrder
    email_verified?: SortOrder
    status?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type project_managerMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    verification_code?: SortOrder
    email_verified?: SortOrder
    status?: SortOrder
    password?: SortOrder
    temporal_password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type project_managerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type Project_managerScalarRelationFilter = {
    is?: project_managerWhereInput
    isNot?: project_managerWhereInput
  }

  export type Data_entryListRelationFilter = {
    every?: data_entryWhereInput
    some?: data_entryWhereInput
    none?: data_entryWhereInput
  }

  export type data_entryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectOrderByRelevanceInput = {
    fields: projectOrderByRelevanceFieldEnum | projectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type projectCountOrderByAggregateInput = {
    id?: SortOrder
    project_name?: SortOrder
    project_manager_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    description?: SortOrder
    target_entry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectAvgOrderByAggregateInput = {
    id?: SortOrder
    project_manager_id?: SortOrder
    target_entry?: SortOrder
  }

  export type projectMaxOrderByAggregateInput = {
    id?: SortOrder
    project_name?: SortOrder
    project_manager_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    description?: SortOrder
    target_entry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectMinOrderByAggregateInput = {
    id?: SortOrder
    project_name?: SortOrder
    project_manager_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    description?: SortOrder
    target_entry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectSumOrderByAggregateInput = {
    id?: SortOrder
    project_manager_id?: SortOrder
    target_entry?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProjectScalarRelationFilter = {
    is?: projectWhereInput
    isNot?: projectWhereInput
  }

  export type data_entryOrderByRelevanceInput = {
    fields: data_entryOrderByRelevanceFieldEnum | data_entryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type data_entryCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    date?: SortOrder
    location?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    video_url?: SortOrder
    document_url?: SortOrder
    file?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type data_entryAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }

  export type data_entryMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    date?: SortOrder
    location?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    video_url?: SortOrder
    document_url?: SortOrder
    file?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type data_entryMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    date?: SortOrder
    location?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    video_url?: SortOrder
    document_url?: SortOrder
    file?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type data_entrySumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type projectCreateNestedManyWithoutProject_managerInput = {
    create?: XOR<projectCreateWithoutProject_managerInput, projectUncheckedCreateWithoutProject_managerInput> | projectCreateWithoutProject_managerInput[] | projectUncheckedCreateWithoutProject_managerInput[]
    connectOrCreate?: projectCreateOrConnectWithoutProject_managerInput | projectCreateOrConnectWithoutProject_managerInput[]
    createMany?: projectCreateManyProject_managerInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type projectUncheckedCreateNestedManyWithoutProject_managerInput = {
    create?: XOR<projectCreateWithoutProject_managerInput, projectUncheckedCreateWithoutProject_managerInput> | projectCreateWithoutProject_managerInput[] | projectUncheckedCreateWithoutProject_managerInput[]
    connectOrCreate?: projectCreateOrConnectWithoutProject_managerInput | projectCreateOrConnectWithoutProject_managerInput[]
    createMany?: projectCreateManyProject_managerInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type projectUpdateManyWithoutProject_managerNestedInput = {
    create?: XOR<projectCreateWithoutProject_managerInput, projectUncheckedCreateWithoutProject_managerInput> | projectCreateWithoutProject_managerInput[] | projectUncheckedCreateWithoutProject_managerInput[]
    connectOrCreate?: projectCreateOrConnectWithoutProject_managerInput | projectCreateOrConnectWithoutProject_managerInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutProject_managerInput | projectUpsertWithWhereUniqueWithoutProject_managerInput[]
    createMany?: projectCreateManyProject_managerInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutProject_managerInput | projectUpdateWithWhereUniqueWithoutProject_managerInput[]
    updateMany?: projectUpdateManyWithWhereWithoutProject_managerInput | projectUpdateManyWithWhereWithoutProject_managerInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type projectUncheckedUpdateManyWithoutProject_managerNestedInput = {
    create?: XOR<projectCreateWithoutProject_managerInput, projectUncheckedCreateWithoutProject_managerInput> | projectCreateWithoutProject_managerInput[] | projectUncheckedCreateWithoutProject_managerInput[]
    connectOrCreate?: projectCreateOrConnectWithoutProject_managerInput | projectCreateOrConnectWithoutProject_managerInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutProject_managerInput | projectUpsertWithWhereUniqueWithoutProject_managerInput[]
    createMany?: projectCreateManyProject_managerInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutProject_managerInput | projectUpdateWithWhereUniqueWithoutProject_managerInput[]
    updateMany?: projectUpdateManyWithWhereWithoutProject_managerInput | projectUpdateManyWithWhereWithoutProject_managerInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type project_managerCreateNestedOneWithoutProjectInput = {
    create?: XOR<project_managerCreateWithoutProjectInput, project_managerUncheckedCreateWithoutProjectInput>
    connectOrCreate?: project_managerCreateOrConnectWithoutProjectInput
    connect?: project_managerWhereUniqueInput
  }

  export type data_entryCreateNestedManyWithoutProjectInput = {
    create?: XOR<data_entryCreateWithoutProjectInput, data_entryUncheckedCreateWithoutProjectInput> | data_entryCreateWithoutProjectInput[] | data_entryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: data_entryCreateOrConnectWithoutProjectInput | data_entryCreateOrConnectWithoutProjectInput[]
    createMany?: data_entryCreateManyProjectInputEnvelope
    connect?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
  }

  export type data_entryUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<data_entryCreateWithoutProjectInput, data_entryUncheckedCreateWithoutProjectInput> | data_entryCreateWithoutProjectInput[] | data_entryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: data_entryCreateOrConnectWithoutProjectInput | data_entryCreateOrConnectWithoutProjectInput[]
    createMany?: data_entryCreateManyProjectInputEnvelope
    connect?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
  }

  export type project_managerUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<project_managerCreateWithoutProjectInput, project_managerUncheckedCreateWithoutProjectInput>
    connectOrCreate?: project_managerCreateOrConnectWithoutProjectInput
    upsert?: project_managerUpsertWithoutProjectInput
    connect?: project_managerWhereUniqueInput
    update?: XOR<XOR<project_managerUpdateToOneWithWhereWithoutProjectInput, project_managerUpdateWithoutProjectInput>, project_managerUncheckedUpdateWithoutProjectInput>
  }

  export type data_entryUpdateManyWithoutProjectNestedInput = {
    create?: XOR<data_entryCreateWithoutProjectInput, data_entryUncheckedCreateWithoutProjectInput> | data_entryCreateWithoutProjectInput[] | data_entryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: data_entryCreateOrConnectWithoutProjectInput | data_entryCreateOrConnectWithoutProjectInput[]
    upsert?: data_entryUpsertWithWhereUniqueWithoutProjectInput | data_entryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: data_entryCreateManyProjectInputEnvelope
    set?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
    disconnect?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
    delete?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
    connect?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
    update?: data_entryUpdateWithWhereUniqueWithoutProjectInput | data_entryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: data_entryUpdateManyWithWhereWithoutProjectInput | data_entryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: data_entryScalarWhereInput | data_entryScalarWhereInput[]
  }

  export type data_entryUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<data_entryCreateWithoutProjectInput, data_entryUncheckedCreateWithoutProjectInput> | data_entryCreateWithoutProjectInput[] | data_entryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: data_entryCreateOrConnectWithoutProjectInput | data_entryCreateOrConnectWithoutProjectInput[]
    upsert?: data_entryUpsertWithWhereUniqueWithoutProjectInput | data_entryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: data_entryCreateManyProjectInputEnvelope
    set?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
    disconnect?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
    delete?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
    connect?: data_entryWhereUniqueInput | data_entryWhereUniqueInput[]
    update?: data_entryUpdateWithWhereUniqueWithoutProjectInput | data_entryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: data_entryUpdateManyWithWhereWithoutProjectInput | data_entryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: data_entryScalarWhereInput | data_entryScalarWhereInput[]
  }

  export type projectCreateNestedOneWithoutData_entryInput = {
    create?: XOR<projectCreateWithoutData_entryInput, projectUncheckedCreateWithoutData_entryInput>
    connectOrCreate?: projectCreateOrConnectWithoutData_entryInput
    connect?: projectWhereUniqueInput
  }

  export type projectUpdateOneRequiredWithoutData_entryNestedInput = {
    create?: XOR<projectCreateWithoutData_entryInput, projectUncheckedCreateWithoutData_entryInput>
    connectOrCreate?: projectCreateOrConnectWithoutData_entryInput
    upsert?: projectUpsertWithoutData_entryInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutData_entryInput, projectUpdateWithoutData_entryInput>, projectUncheckedUpdateWithoutData_entryInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type projectCreateWithoutProject_managerInput = {
    project_name: string
    start_date: Date | string
    end_date: Date | string
    description: string
    target_entry: number
    createdAt?: Date | string
    updatedAt?: Date | string
    data_entry?: data_entryCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutProject_managerInput = {
    id?: number
    project_name: string
    start_date: Date | string
    end_date: Date | string
    description: string
    target_entry: number
    createdAt?: Date | string
    updatedAt?: Date | string
    data_entry?: data_entryUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutProject_managerInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutProject_managerInput, projectUncheckedCreateWithoutProject_managerInput>
  }

  export type projectCreateManyProject_managerInputEnvelope = {
    data: projectCreateManyProject_managerInput | projectCreateManyProject_managerInput[]
    skipDuplicates?: boolean
  }

  export type projectUpsertWithWhereUniqueWithoutProject_managerInput = {
    where: projectWhereUniqueInput
    update: XOR<projectUpdateWithoutProject_managerInput, projectUncheckedUpdateWithoutProject_managerInput>
    create: XOR<projectCreateWithoutProject_managerInput, projectUncheckedCreateWithoutProject_managerInput>
  }

  export type projectUpdateWithWhereUniqueWithoutProject_managerInput = {
    where: projectWhereUniqueInput
    data: XOR<projectUpdateWithoutProject_managerInput, projectUncheckedUpdateWithoutProject_managerInput>
  }

  export type projectUpdateManyWithWhereWithoutProject_managerInput = {
    where: projectScalarWhereInput
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutProject_managerInput>
  }

  export type projectScalarWhereInput = {
    AND?: projectScalarWhereInput | projectScalarWhereInput[]
    OR?: projectScalarWhereInput[]
    NOT?: projectScalarWhereInput | projectScalarWhereInput[]
    id?: IntFilter<"project"> | number
    project_name?: StringFilter<"project"> | string
    project_manager_id?: IntFilter<"project"> | number
    start_date?: DateTimeFilter<"project"> | Date | string
    end_date?: DateTimeFilter<"project"> | Date | string
    description?: StringFilter<"project"> | string
    target_entry?: IntFilter<"project"> | number
    createdAt?: DateTimeFilter<"project"> | Date | string
    updatedAt?: DateTimeFilter<"project"> | Date | string
  }

  export type project_managerCreateWithoutProjectInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type project_managerUncheckedCreateWithoutProjectInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image?: string | null
    verification_code?: string | null
    email_verified?: boolean
    status?: $Enums.Status
    password: string
    temporal_password?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type project_managerCreateOrConnectWithoutProjectInput = {
    where: project_managerWhereUniqueInput
    create: XOR<project_managerCreateWithoutProjectInput, project_managerUncheckedCreateWithoutProjectInput>
  }

  export type data_entryCreateWithoutProjectInput = {
    date: Date | string
    location: string
    description: string
    image_url?: string | null
    video_url?: string | null
    document_url?: string | null
    file?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type data_entryUncheckedCreateWithoutProjectInput = {
    id?: number
    date: Date | string
    location: string
    description: string
    image_url?: string | null
    video_url?: string | null
    document_url?: string | null
    file?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type data_entryCreateOrConnectWithoutProjectInput = {
    where: data_entryWhereUniqueInput
    create: XOR<data_entryCreateWithoutProjectInput, data_entryUncheckedCreateWithoutProjectInput>
  }

  export type data_entryCreateManyProjectInputEnvelope = {
    data: data_entryCreateManyProjectInput | data_entryCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type project_managerUpsertWithoutProjectInput = {
    update: XOR<project_managerUpdateWithoutProjectInput, project_managerUncheckedUpdateWithoutProjectInput>
    create: XOR<project_managerCreateWithoutProjectInput, project_managerUncheckedCreateWithoutProjectInput>
    where?: project_managerWhereInput
  }

  export type project_managerUpdateToOneWithWhereWithoutProjectInput = {
    where?: project_managerWhereInput
    data: XOR<project_managerUpdateWithoutProjectInput, project_managerUncheckedUpdateWithoutProjectInput>
  }

  export type project_managerUpdateWithoutProjectInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type project_managerUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    verification_code?: NullableStringFieldUpdateOperationsInput | string | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    password?: StringFieldUpdateOperationsInput | string
    temporal_password?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type data_entryUpsertWithWhereUniqueWithoutProjectInput = {
    where: data_entryWhereUniqueInput
    update: XOR<data_entryUpdateWithoutProjectInput, data_entryUncheckedUpdateWithoutProjectInput>
    create: XOR<data_entryCreateWithoutProjectInput, data_entryUncheckedCreateWithoutProjectInput>
  }

  export type data_entryUpdateWithWhereUniqueWithoutProjectInput = {
    where: data_entryWhereUniqueInput
    data: XOR<data_entryUpdateWithoutProjectInput, data_entryUncheckedUpdateWithoutProjectInput>
  }

  export type data_entryUpdateManyWithWhereWithoutProjectInput = {
    where: data_entryScalarWhereInput
    data: XOR<data_entryUpdateManyMutationInput, data_entryUncheckedUpdateManyWithoutProjectInput>
  }

  export type data_entryScalarWhereInput = {
    AND?: data_entryScalarWhereInput | data_entryScalarWhereInput[]
    OR?: data_entryScalarWhereInput[]
    NOT?: data_entryScalarWhereInput | data_entryScalarWhereInput[]
    id?: IntFilter<"data_entry"> | number
    project_id?: IntFilter<"data_entry"> | number
    date?: DateTimeFilter<"data_entry"> | Date | string
    location?: StringFilter<"data_entry"> | string
    description?: StringFilter<"data_entry"> | string
    image_url?: StringNullableFilter<"data_entry"> | string | null
    video_url?: StringNullableFilter<"data_entry"> | string | null
    document_url?: StringNullableFilter<"data_entry"> | string | null
    file?: StringNullableFilter<"data_entry"> | string | null
    metadata?: JsonNullableFilter<"data_entry">
    createdAt?: DateTimeFilter<"data_entry"> | Date | string
    updatedAt?: DateTimeFilter<"data_entry"> | Date | string
  }

  export type projectCreateWithoutData_entryInput = {
    project_name: string
    start_date: Date | string
    end_date: Date | string
    description: string
    target_entry: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project_manager: project_managerCreateNestedOneWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutData_entryInput = {
    id?: number
    project_name: string
    project_manager_id: number
    start_date: Date | string
    end_date: Date | string
    description: string
    target_entry: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectCreateOrConnectWithoutData_entryInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutData_entryInput, projectUncheckedCreateWithoutData_entryInput>
  }

  export type projectUpsertWithoutData_entryInput = {
    update: XOR<projectUpdateWithoutData_entryInput, projectUncheckedUpdateWithoutData_entryInput>
    create: XOR<projectCreateWithoutData_entryInput, projectUncheckedCreateWithoutData_entryInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutData_entryInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutData_entryInput, projectUncheckedUpdateWithoutData_entryInput>
  }

  export type projectUpdateWithoutData_entryInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project_manager?: project_managerUpdateOneRequiredWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutData_entryInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    project_manager_id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectCreateManyProject_managerInput = {
    id?: number
    project_name: string
    start_date: Date | string
    end_date: Date | string
    description: string
    target_entry: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectUpdateWithoutProject_managerInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data_entry?: data_entryUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutProject_managerInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    data_entry?: data_entryUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateManyWithoutProject_managerInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    target_entry?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type data_entryCreateManyProjectInput = {
    id?: number
    date: Date | string
    location: string
    description: string
    image_url?: string | null
    video_url?: string | null
    document_url?: string | null
    file?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type data_entryUpdateWithoutProjectInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type data_entryUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type data_entryUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}