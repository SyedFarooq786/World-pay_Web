/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.PaymentDetailInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentDetail.createMany(input as any))),

        create: procedure.input($Schema.PaymentDetailInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentDetail.create(input as any))),

        deleteMany: procedure.input($Schema.PaymentDetailInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentDetail.deleteMany(input as any))),

        delete: procedure.input($Schema.PaymentDetailInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentDetail.delete(input as any))),

        findFirst: procedure.input($Schema.PaymentDetailInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).paymentDetail.findFirst(input as any))),

        findMany: procedure.input($Schema.PaymentDetailInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).paymentDetail.findMany(input as any))),

        findUnique: procedure.input($Schema.PaymentDetailInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).paymentDetail.findUnique(input as any))),

        updateMany: procedure.input($Schema.PaymentDetailInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentDetail.updateMany(input as any))),

        update: procedure.input($Schema.PaymentDetailInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).paymentDetail.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PaymentDetailCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentDetailCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentDetailCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentDetailCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PaymentDetailCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentDetailCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PaymentDetailGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PaymentDetailGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentDetailCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentDetailCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PaymentDetailGetPayload<T>, Context>) => Promise<Prisma.PaymentDetailGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PaymentDetailDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentDetailDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentDetailDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentDetailDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PaymentDetailDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentDetailDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PaymentDetailGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PaymentDetailGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentDetailDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentDetailDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PaymentDetailGetPayload<T>, Context>) => Promise<Prisma.PaymentDetailGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PaymentDetailFindFirstArgs, TData = Prisma.PaymentDetailGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PaymentDetailFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PaymentDetailGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PaymentDetailFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PaymentDetailFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PaymentDetailGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PaymentDetailGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PaymentDetailFindManyArgs, TData = Array<Prisma.PaymentDetailGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PaymentDetailFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PaymentDetailGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PaymentDetailFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PaymentDetailFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PaymentDetailGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PaymentDetailGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PaymentDetailFindUniqueArgs, TData = Prisma.PaymentDetailGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PaymentDetailFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PaymentDetailGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PaymentDetailFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PaymentDetailFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PaymentDetailGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PaymentDetailGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PaymentDetailUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentDetailUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentDetailUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentDetailUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PaymentDetailUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PaymentDetailUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PaymentDetailGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PaymentDetailGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PaymentDetailUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PaymentDetailUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PaymentDetailGetPayload<T>, Context>) => Promise<Prisma.PaymentDetailGetPayload<T>>
            };

    };
}
